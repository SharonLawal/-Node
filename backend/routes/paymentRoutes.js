/*
  This code sets up two endpoints for handling Stripe payments:
  1. /create-payment-intent: Creates a payment intent with a specified amount and currency.
  2. /confirm-payment-intent: Confirms the payment and stores order details in MongoDB.
  After successful payment, the order is saved to the database, and an email is sent to the customer.
*/

const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const mongoose = require('mongoose');
const nodemailer = require('nodemailer'); // Import nodemailer
const Order = require('../models/Order'); // Import Order model

// Configure nodemailer transporter (Use your SMTP settings)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

// Function to send confirmation email
const sendConfirmationEmail = async (customerEmail, orderDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: customerEmail,
    subject: 'Order Confirmation - Payment Successful',
    text: `Thank you for your order! Your payment has been confirmed.
    Order Details:
    ${JSON.stringify(orderDetails, null, 2)}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', customerEmail);
  } catch (error) {
    console.error('Email Error:', error);
  }
};

// Endpoint to create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;
    
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency || 'ngn',
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Payment Intent Error:', error);
    res.status(500).send({ message: 'Error creating payment intent' });
  }
});

// Endpoint to confirm a payment intent and store the order in MongoDB
router.post('/confirm-payment-intent', async (req, res) => {
  try {
    const { paymentIntentId, paymentMethodId, orderDetails, customerEmail } = req.body;

    // Confirm the payment intent
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
      payment_method: paymentMethodId,
    });

    // If payment is successful, save order details to MongoDB
    if (paymentIntent.status === 'succeeded') {
      const newOrder = new Order(orderDetails); // Create new order document
      await newOrder.save(); // Save order in MongoDB

      // Send email confirmation
      if (customerEmail) {
        await sendConfirmationEmail(customerEmail, orderDetails);
      }

      res.send({ status: 'Payment confirmed', paymentIntent, order: newOrder });
    } else {
      res.status(400).send({ message: 'Payment failed', paymentIntent });
    }
  } catch (error) {
    console.error('Payment Confirmation Error:', error);
    res.status(500).send({ message: 'Error confirming payment intent' });
  }
});

module.exports = router;
