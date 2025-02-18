import React, { useState } from "react";
import PaymentMethodModal from "./PaymentMethodModal";
import BankTransferModal from "./BankTransferModal";

interface PaysProps {
  isOpen: boolean;
  onClose: () => void;
}

const Pays: React.FC<PaysProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && (
        <PaymentMethodModal
          isOpen={isOpen}
          onClose={onClose}
          onProceed={() => setStep(2)}
        />
      )}

      {step === 2 && <BankTransferModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default Pays;
