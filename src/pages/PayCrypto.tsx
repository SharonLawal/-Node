import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PayCrypto = () => {
  return (
    <div className=" ">
      <div className="flex items-center gap-8 p-5">
        <Link
          to="/products"
          className="flex items-center justify-center w-8 h-8 border rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
        >
          <ArrowLeft size={16} />
        </Link>
        <div className="gap-4 border-2 border-dashed border-gray-400 p-4 rounded-lg w-full">
          <div className="flex items-center gap-4 justify-between">
            <h1 className="text-3xl font-bold text-black">Payment Details </h1>
            <button className="text-white rounded-[24px] font-semibold w-[200px] bg-cyan-500 h-[50px]">
              Pay with Crypto
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-6">
        <form className="space-y-6  ">
          <div className="space-y-2">
            <label htmlFor="cardName" className="block text-gray-500">
              Name on card
            </label>
            <input
              id="cardName"
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="cardNumber" className="block text-gray-500">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="expirationDate" className="block text-gray-500">
                Expiration Date
              </label>
              <input
                id="expirationDate"
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cvv" className="block text-gray-500">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <p className="text-sm text-gray-500">
            By clicking submit, your agree to our{" "}
            <a href="#" className="text-teal-500 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-teal-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayCrypto;
