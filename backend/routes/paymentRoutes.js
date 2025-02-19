const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');
const Order = require('../models/Order');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
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

// Endpoint to create a Stripe Checkout Session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { orderDetails, customerEmail } = req.body;

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: orderDetails.items.map((item) => ({
        price_data: {
          currency: 'ngn', 
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Convert to kobo
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      customer_email: customerEmail,
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout Session Error:', error);
    res.status(500).send({ message: 'Error creating checkout session' });
  }
});

// Endpoint to verify payment and save order
router.get('/confirm-payment', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

    if (session.payment_status === 'paid') {
      const orderDetails = JSON.parse(session.metadata.orderDetails);

      // Save order to MongoDB
      const newOrder = new Order(orderDetails);
      await newOrder.save();

      // Send confirmation email
      if (session.customer_email) {
        await sendConfirmationEmail(session.customer_email, orderDetails);
      }

      res.json({ status: 'success', order: newOrder });
    } else {
      res.status(400).json({ message: 'Payment not completed' });
    }
  } catch (error) {
    console.error('Payment Confirmation Error:', error);
    res.status(500).send({ message: 'Error confirming payment' });
  }
});

module.exports = router;
