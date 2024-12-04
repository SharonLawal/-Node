import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { DePay } from '@depay/web3-payments';

export function useWeb3Payment() {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  const initiatePayment = async (amount: number) => {
    if (!isConnected) {
      await open();
      return false;
    }

    try {
      await DePay.Payment({
        accept: [
          {
            blockchain: 'ethereum',
            token: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            amount,
          },
          {
            blockchain: 'ethereum',
            token: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            amount,
          }
        ],
        receiver: import.meta.env.VITE_RECEIVER_ADDRESS,
      });
      return true;
    } catch (error) {
      console.error('Payment failed:', error);
      return false;
    }
  };

  return {
    initiatePayment,
    isConnected
  };
}