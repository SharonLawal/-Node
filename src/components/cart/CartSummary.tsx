import PaymentButton from '../payment/PaymentButton';

interface CartSummaryProps {
  total: number;
}

export default function CartSummary({ total }: CartSummaryProps) {
  return (
    <div className="mt-6">
      <div className="flex justify-between text-xl font-bold mb-4">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <PaymentButton amount={total} />
    </div>
  );
}