import { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// Load Stripe with public key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY); 

interface PaymentButtonProps {
  amount: number;
  orderDetails: any;
}

export default function PaymentButton({ amount, orderDetails }: PaymentButtonProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} orderDetails={orderDetails} />
    </Elements>
  );
}

function CheckoutForm({ amount, orderDetails }: PaymentButtonProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart);

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      // Step 1: Create Payment Intent
      const response = await fetch('https://node-307s.onrender.com/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: 'usd' }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const { clientSecret } = await response.json();
      console.log('Client Secret:', clientSecret);

      // Step 2: Confirm Payment
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error('CardElement not found.');
      }

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (error) {
        console.error('Payment Error:', error);
        alert('Payment failed. Please try again.');
        setIsProcessing(false);
        return;
      }

      // Step 3: Store Order & Send Email
      await fetch('https://node-307s.onrender.com/api/confirm-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentIntentId: paymentIntent.id,
          paymentMethodId: paymentIntent.payment_method,
          orderDetails,
          // customerEmail: orderDetails.email,
        }),
      });

      clearCart();
      alert('Payment successful! You will receive an email confirmation.');
    } catch (error) {
      console.error('Payment Processing Error:', error);
      alert('An error occurred. Please try again.');
    }

    setIsProcessing(false);
  };

  return (
    <div>
      <CardElement className="p-4 border rounded-md" />
      <button
        onClick={handlePayment}
        disabled={isProcessing || !stripe}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 mt-4"
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
}
