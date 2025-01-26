import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Wallet, ArrowRight } from 'lucide-react';
import Web3 from 'web3';

interface PaymentOptionsProps {
  amount: number;
  onSuccess: () => void;
}

export default function PaymentOptions({ amount, onSuccess }: PaymentOptionsProps) {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'crypto' | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleCardPayment = async () => {
    setProcessing(true);
    // Simulate card payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProcessing(false);
    onSuccess();
  };

  const handleCryptoPayment = async () => {
    setProcessing(true);
    try {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const accounts = await web3.eth.getAccounts();
        const weiAmount = web3.utils.toWei(amount.toString(), 'ether');
        
        await web3.eth.sendTransaction({
          from: accounts[0],
          to: '0xYourReceiverAddress', // Replace with actual address
          value: weiAmount
        });
        
        onSuccess();
      } else {
        alert('Please install MetaMask to make crypto payments');
      }
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
    setProcessing(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedMethod('card')}
          className={`p-6 rounded-xl border-2 transition-colors ${
            selectedMethod === 'card'
              ? 'border-green-500 bg-green-50'
              : 'border-gray-200 hover:border-green-200'
          }`}
        >
          <CreditCard className="h-8 w-8 mb-4 text-green-500" />
          <h3 className="font-semibold mb-2">Credit Card</h3>
          <p className="text-sm text-gray-600">Secure payment via Stripe</p>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedMethod('crypto')}
          className={`p-6 rounded-xl border-2 transition-colors ${
            selectedMethod === 'crypto'
              ? 'border-green-500 bg-green-50'
              : 'border-gray-200 hover:border-green-200'
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={processing}
              onClick={selectedMethod === 'card' ? handleCardPayment : handleCryptoPayment}
              className="w-full bg-green-500 text-white py-4 rounded-lg flex items-center justify-center space-x-2 disabled:bg-gray-400"
            >
              {processing ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <span>Pay ${amount}</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}