import visa from "../assets/visa.png";
import verve from "../assets/verve logo.png";
import master from "../assets/master.png";
import paypal from "../assets/paypal logo.png";
import bitcoin from "../assets/bitcoinsv logo.png";
import eth from "../assets/ether.png";
import usdt from "../assets/usdt logo.png";
import { useNavigate } from "react-router-dom";
function OrderSummary() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-[712px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 space-y-8">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between mb-8">
            <div>
              <p className="text-gray-600">Order No: #NH7890</p>
              <p className="text-gray-600">Date: 3rd February, 2025</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">511 Ikwerre Road,</p>
              <p className="text-gray-600">Rumuigbo, Rivers state.</p>
            </div>
          </div>

          {/* Order Summary */}
          <h2 className="text-2xl font-bold text-center mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Item(s) total:</span>
              <span className="font-semibold">₦1,600,00.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Shipping cost:</span>
              <span className="font-semibold">₦30,000.00</span>
            </div>
            <div className="flex justify-between items-center text-gray-400">
              <span>Item(s) Discount:</span>
              <span>None</span>
            </div>
            <div className="flex justify-between items-center border-2 border-dashed border-gray-200 p-3 rounded-lg">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">₦1,900,00.00</span>
            </div>
          </div>

          <p className="text-red-500 text-sm mb-8">
            * You will not be charged until you review this order on the next
            page
          </p>

          {/* Payment Options */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Safe Payment Options
          </h2>

          {/* Crypto Payment */}
          <button
            onClick={() => navigate("/pay/crypto")}
            className="w-[195px] py-3 px-4 border-2 border-gray-200 rounded-xl mb-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-600">Pay with Crypto</span>
            </div>
          </button>

          {/* Crypto Icons */}
          <div className="flex  space-x-6 mb-6">
            <img src={bitcoin} alt="" />
            <img src={eth} alt="" />
            <img src={usdt} alt="" />
          </div>

          {/* Fiat Payment */}
          <button className="w-[195px] py-3 px-4 border-2 border-gray-200 rounded-xl mb-4 hover:border-blue-500 transition-colors">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-600">Pay with Fiat</span>
            </div>
          </button>

          {/* Payment Method Icons */}
          <div className="flex  items-center space-x-4 mb-8">
            <img src={visa} alt="" />
            <img src={verve} alt="" />
            <img src={master} alt="" />
            <img src={paypal} alt="" />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="w-[364px] py-4 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-cyan-600 transition-colors">
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
