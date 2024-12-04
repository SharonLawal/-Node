import { useState } from 'react';
import { useCartStore } from '../../store/cartStore';

interface PaymentButtonProps {
  amount: number;
}

export default function PaymentButton({ amount }: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart);

  const handlePayment = async () => {
    setIsProcessing(true);
    // In a real application, you would integrate with your payment processor here
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    clearCart();
    setIsProcessing(false);
    alert('Thank you for your order! Our team will contact you shortly with payment instructions.');
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isProcessing}
      className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400"
    >
      {isProcessing ? 'Processing...' : 'Complete Order'}
    </button>
  );
}