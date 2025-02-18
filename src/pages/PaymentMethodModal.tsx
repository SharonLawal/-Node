import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BankTransferModal from "./BankTransferModal";

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

function PaymentMethodModal({ isOpen, onClose }: PaymentMethodModalProps) {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [showBankTransfer, setShowBankTransfer] = useState(false);

  if (!isOpen) return null;

  const paymentMethods = [
    { id: "bank", name: "Bank Transfer" },
    { id: "visa", name: "Visa" },
    { id: "verve", name: "Verve" },
    { id: "mastercard", name: "MasterCard" },
    { id: "paypal", name: "PayPal" },
    { id: "crypto", name: "Pay with Crypto" },
  ];

  const handleMethodSelect = (methodId: string) => {
    if (methodId === "crypto") {
      navigate("/pay/crypt");
      onClose();
    } else if (methodId === "bank") {
      setShowBankTransfer(true);
    } else {
      navigate("/pay/fiat");
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl w-full max-w-md mx-4 relative flex justify-center flex-col mt-20">
        <div className="flex justify-between items-center mb-6 bg-[#101323] h-[80px] p-5 rounded-t-3xl">
          <h2 className="text-2xl font-bold text-white">Pay with Fiat</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors bg-[#FFFFFF] rounded-full bg-opacity-15"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handleMethodSelect(method.id)}
                className="w-full p-4 text-left text-lg font-medium border-2 border-gray-200 rounded-2xl flex justify-between items-center hover:border-cyan-500 transition-colors focus:outline-none focus:border-cyan-500"
              >
                {method.name}
                <span className="w-5 h-5 border-2 border-[#D2D6DB] rounded-full flex items-center justify-center">
                  {selectedMethod === method.id && (
                    <span className="w-3 h-3 bg-black rounded-full" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <BankTransferModal
        isOpen={showBankTransfer}
        onClose={() => {
          setShowBankTransfer(false);
          onClose();
        }}
      />
    </div>
  );
}

export default PaymentMethodModal;
