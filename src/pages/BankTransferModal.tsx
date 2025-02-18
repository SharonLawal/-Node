import React from "react";
import { X, Copy } from "lucide-react";

interface BankTransferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function BankTransferModal({ isOpen, onClose }: BankTransferModalProps) {
  if (!isOpen) return null;

  const accountDetails = {
    number: "1001037803",
    name: "Nodes Hub Ent.",
    bank: "VFD Microfinance Bank",
    amount: "₦1,900,00.00",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 relative">
        <div className="bg-gray-900 p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Bank Transfer</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Account Number
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 p-4 bg-gray-50 rounded-xl">
                <p className="text-xl font-bold mb-1">
                  {accountDetails.number}
                </p>
                <p className="text-gray-600">{accountDetails.name}</p>
                <p className="text-gray-600">{accountDetails.bank}</p>
              </div>
              <button
                onClick={() => copyToClipboard(accountDetails.number)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Amount to pay
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 p-4 bg-gray-50 rounded-xl">
                <p className="text-xl font-bold">{accountDetails.amount}</p>
              </div>
              <button
                onClick={() => copyToClipboard(accountDetails.amount)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankTransferModal;
