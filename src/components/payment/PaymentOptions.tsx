import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Wallet } from "lucide-react";
import CryptoPayment from "./CryptoPayment";
import CreditCardForm from "./CreditCardForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  "pk_test_51QnhLvFHwL9JgzZgyBAw7V9SpqZOb5U4ZTj0Rj9Iybcw7KXpWWQ8EbzLhHf8sElzq6JAvlXzBZStaI0kKqKF0W0s00VfB19zSK"
);

interface PaymentOptionsProps {
  amount: number;
  onSuccess: () => void;
}

export default function PaymentOptions({
  amount,
  onSuccess,
}: PaymentOptionsProps) {
  const [selectedMethod, setSelectedMethod] = useState<
    "card" | "crypto" | null
  >(null);
  const [processing, setProcessing] = useState(false);

  const handleCardPayment = async (paymentDetails: {
    paymentMethodId: string;
    orderDetails: any;
  }) => {
    setProcessing(true);
    try {
      const createIntentResponse = await fetch(
        "https://node-307s.onrender.com/api/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, currency: "usd" }),
        }
      );

      if (!createIntentResponse.ok) {
        throw new Error("Failed to create payment intent");
      }

      const responseData = await createIntentResponse.json();
      const clientSecret = responseData.clientSecret;

      const confirmPaymentResponse = await fetch(
        "https://node-307s.onrender.com/api/confirm-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentIntentId: clientSecret,
            paymentMethodId: paymentDetails.paymentMethodId,
            orderDetails: paymentDetails.orderDetails,
          }),
        }
      );

      if (!confirmPaymentResponse.ok) {
        throw new Error("Payment confirmation failed.");
      }

      onSuccess();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("An error occurred while processing the payment.");
    }
    setProcessing(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedMethod("card")}
          className={`p-6 rounded-xl border-2 transition-colors ${
            selectedMethod === "card"
              ? "border-green-500 bg-green-50"
              : "border-gray-200 hover:border-green-200"
          }`}
        >
          <CreditCard className="h-8 w-8 mb-4 text-green-500" />
          <h3 className="font-semibold mb-2">Credit Card</h3>
          <p className="text-sm text-gray-600">Secure payment via Stripe</p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedMethod("crypto")}
          className={`p-6 rounded-xl border-2 transition-colors ${
            selectedMethod === "crypto"
              ? "border-green-500 bg-green-50"
              : "border-gray-200 hover:border-green-200"
          }`}
        >
          <Wallet className="h-8 w-8 mb-4 text-green-500" />
          <h3 className="font-semibold mb-2">Cryptocurrency</h3>
          <p className="text-sm text-gray-600">Pay with ETH via MetaMask</p>
        </motion.button>
      </div>

      <AnimatePresence>
        {selectedMethod && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            {selectedMethod === "card" ? (
              <Elements stripe={stripePromise}>
                <CreditCardForm onSubmit={handleCardPayment} />
              </Elements>
            ) : (
              <CryptoPayment
                amount={amount}
                onSuccess={onSuccess}
                onError={() => alert("Crypto payment failed")}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
