const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

// Endpoint to confirm a payment intent
router.post('/confirm-payment-intent', async (req, res) => {
  try {
    const { paymentIntentId, paymentMethodId } = req.body;

    // Confirm the payment intent
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
      payment_method: paymentMethodId,
    });

    // If payment is successful, return confirmation response
    if (paymentIntent.status === 'succeeded') {
      res.send({ status: 'Payment confirmed', paymentIntent });
    } else {
      res.status(400).send({ message: 'Payment failed', paymentIntent });
    }
  } catch (error) {
    console.error('Payment Confirmation Error:', error);
    res.status(500).send({ message: 'Error confirming payment intent' });
  }
});

module.exports = router;
