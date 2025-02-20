import { useState } from 'react';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
//import DePay from '@depay/web3-payments';
import { Wallet, AlertCircle } from 'lucide-react';

interface CryptoPaymentProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function CryptoPayment({
  amount,
  onSuccess,
  onError,
}: CryptoPaymentProps) {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!isConnected) {
      await open();
      return;
    }

    setIsProcessing(true);
    try {
      const payment = await DePay.Payment({
        accept: [
          {
            blockchain: "ethereum",
            token: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // ETH
            amount: amount,
          },
          {
            blockchain: "ethereum",
            token: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
            amount: amount,
          },
        ],
        receiver: import.meta.env.VITE_RECEIVER_ADDRESS,
      });

      if (payment.status === "succeeded") {
        onSuccess();
      } else {
        onError("Payment failed. Please try again.");
      }
    } catch (error) {
      onError("Payment failed. Please try again.");
      console.error("Payment error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Wallet className="h-6 w-6 text-green-500" />
          <h3 className="text-lg font-semibold">Crypto Payment</h3>
        </div>
        <span className="text-xl font-bold">${amount}</span>
      </div>

      {!isConnected && (
        <div className="mb-4 p-4 bg-yellow-50 rounded-lg flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-700">
            Please connect your wallet to proceed with the payment
          </p>
        </div>
      )}

      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Wallet className="h-5 w-5" />
            <span>{isConnected ? "Pay with Crypto" : "Connect Wallet"}</span>
          </>
        )}
      </button>

      <div className="mt-4 text-sm text-gray-500">
        <p>Accepted tokens:</p>
        <ul className="list-disc list-inside">
          <li>ETH (Ethereum)</li>
          <li>USDT (Tether)</li>
        </ul>
      </div>
    </div>
  );
}
