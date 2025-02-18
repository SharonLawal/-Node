import React, { useState } from "react";
import { ArrowLeft, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import QR from "../assets/QR Code.png";
import Pays from "./Pays";

function CryptoPayment() {
  const btcAddress = "Tr7u9EjdfrKhd0Dh986h82";
  const amount = "0.13";

  const [amounts, setAmounts] = useState("1,900,00.00");
  const [cryptoAmount, setCryptoAmount] = useState("0.13");
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");

  const [isPaysModalOpen, setIsPaysModalOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-8 p-5">
        <Link
          to="/products"
          className="flex items-center justify-center w-8 h-8 border rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
        >
          <ArrowLeft size={16} />
        </Link>
        <div className="gap-4 border-2 border-dashed border-gray-400 p-4 rounded-lg w-full">
          <div className="flex items-center gap-4 justify-between">
            <h1 className="text-3xl font-bold text-black">Pay with Crypto</h1>
            <button
              onClick={() => setIsPaysModalOpen(true)}
              className="text-white rounded-[24px] font-semibold w-[200px] bg-cyan-500 h-[50px]"
            >
              Pay with Fiat
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="w-full p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Pay with Crypto
          </h2>

          <div className="space-y-6">
            {/* BTC Address Input */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  BTC address to pay
                </label>

                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value={btcAddress}
                    className="flex-1 p-3 border border-gray-200 rounded-l-lg bg-gray-50"
                  />
                  <button
                    onClick={() => copyToClipboard(btcAddress)}
                    className="px-4 bg-gray-100 border border-l-0 border-gray-200 rounded-r-lg hover:bg-gray-200"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>

                {/* Amount to Pay Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount to pay
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      readOnly
                      value={amount}
                      className="flex-1 p-3 border border-gray-200 rounded-l-lg bg-gray-50"
                    />
                    <button
                      onClick={() => copyToClipboard(amount)}
                      className="px-4 bg-gray-100 border border-l-0 border-gray-200 rounded-r-lg hover:bg-gray-200"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Currency Converter */}
              <div>
                <h2 className="text-lg font-semibold text-gray-600 mb-2">
                  Converter
                </h2>
                <div className="flex items-center border-2 border-cyan-500 rounded-lg p-3 mb-4">
                  <input
                    type="text"
                    className="w-full text-xl font-semibold outline-none"
                    value={amounts}
                    onChange={(e) => setAmounts(e.target.value)}
                  />
                  <select
                    className="ml-2 text-gray-700 font-semibold outline-none bg-transparent"
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                  >
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
                <div className="flex items-center border-2 border-cyan-500 rounded-lg p-3">
                  <input
                    type="text"
                    className="w-full text-xl font-semibold outline-none"
                    value={cryptoAmount}
                    onChange={(e) => setCryptoAmount(e.target.value)}
                  />
                  <select
                    className="ml-2 text-gray-700 font-semibold outline-none bg-transparent"
                    value={selectedCrypto}
                    onChange={(e) => setSelectedCrypto(e.target.value)}
                  >
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="b">
              <div className="flex items-center justify-center">
                <img src={QR} alt="BTC Payment QR Code" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pays Modal */}
      {isPaysModalOpen && (
        <Pays
          isOpen={isPaysModalOpen}
          onClose={() => setIsPaysModalOpen(false)}
        />
      )}
      <div className="bg-gray-900">
        <div className=" text-white p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-6">
            How to make a Deposit
          </h2>
          <div className=" rounded-lg w-full space-y-5">
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Tap the "Scan QR Code" option in your wallet.</li>
              <li>Point your camera at the QR code.</li>
              <li>
                The wallet will automatically extract the BTC address from the
                QR code.
              </li>
            </ul>
            <div className="flex items-center justify-center w-full py-4 ">
              <div className="flex-1 h-[2px] bg-[#00B4D8]"></div>
              <h2 className="mx-4 text-white text-lg font-semibold">or</h2>
              <div className="flex-1 h-[2px] bg-[#00B4D8]"></div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Tap the "Scan QR Code" option in your wallet.</li>
            </ul>

            <p className="mt-4">
              If you have any problem with payment, please contact our Customer
              service agents
            </p>
          </div>
        </div>
        <div className=" bg-[#B12704] space-y-4">
          <div className="p-6 flex justify-between items-center">
            <div className=" text-white  ">
              <p className="font-semibold">Use the correct BTC address</p>
              <p>BTC transactions cannot be reversed</p>
              <p>if sent to the wrong address.</p>
            </div>

            <div className=" text-white ">
              <p className="font-semibold">Check network fees</p>
              <p>Some wallets and exchanges </p>
              <p>charge transaction fees.</p>
            </div>

            <div className=" text-white ">
              <p className="font-semibold">Beware of scams</p>
              <p>Never share your private keys or </p>
              <p>seed phrase with anyone.</p>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default CryptoPayment;
