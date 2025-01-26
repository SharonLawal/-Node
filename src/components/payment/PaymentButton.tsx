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
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    clearCart();
    setIsProcessing(false);
    alert('Payment successful! Thank you for your order.');
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isProcessing}
      className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400"
    >
      {isProcessing ? 'Processing...' : 'Complete Payment'}
    </button>
  );
}