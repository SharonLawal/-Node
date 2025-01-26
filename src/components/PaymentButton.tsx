import { useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useNetwork, useDisconnect } from 'wagmi';
import { DePay } from '@depay/web3-payments';

interface PaymentButtonProps {
  amount: number;
}

export default function PaymentButton({ amount }: PaymentButtonProps) {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect();

  const handlePayment = async () => {
    if (!isConnected) {
      await open();
      return;
    }

    try {
      await DePay.Payment({
        accept: [
          {
            blockchain: 'ethereum',
            token: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            amount: amount,
          },
          {
            blockchain: 'ethereum',
            token: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
            amount: amount,
          }
        ],
        receiver: process.env.VITE_RECEIVER_ADDRESS,
      });
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
    >
      {isConnected ? 'Pay with Crypto' : 'Connect Wallet'}
    </button>
  );
}