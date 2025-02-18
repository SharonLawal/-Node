import { ArrowLeft, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Features from "./Features";
import speaker from "../assets/speaker.png";
import casi from "../assets/case.png";
import star from "../assets/Stars.png";
import ShippingModals from "./Ship";
import OrderSummary from "./OrderSummary";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { ICartItem, IProduct } from "../types";
import { useCartStore } from "@/store/cartStore";




function Cart() {
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [showOrderItem, setShowOrderItem] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  // const cartItems = useSelector((state: any) => state.cart.items);
    const { items, addItem, clearCart, removeItem, getTotalPrice } = useCartStore();
  
  // console.log(cartItems)

  // Function to update quantity




  // Function to handle modal submit
  const handleModalSubmit = () => {
    setShowOrderItem(true);
    setIsShippingModalOpen(false);
    setIsNextPage(true);
    clearCart();
    console.log("object");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full p-5">
        <div className="flex items-center gap-8 p-5 w-full">
          <Link
            to="/products"
            className="flex items-center justify-center w-8 h-8 border border-cyan-500 rounded-full text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
          >
            <ArrowLeft size={16} />
          </Link>
          <div className="gap-4 border-2 border-dashed border-gray-400 p-4 rounded-lg w-full">
            <div className="flex-1 text-black text-3xl font-bold">Cart</div>
          </div>
        </div>

        {isNextPage ? (
          ""
        ) : (
          <div className="rounded-lg p-6 mb-8">
            <div className="grid grid-cols-12 pb-4 border-b border-cyan-500">
              <div className="col-span-6 text-[#8F9BB3]">Product</div>
              <div className="col-span-3 text-right text-[#8F9BB3]">Price</div>
              <div className="col-span-3 text-right text-[#8F9BB3]">
                Quantity
              </div>
            </div>

            {/* Product Items */}
            <div className="space-y-6 py-6 border-b border-cyan-500">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-12 items-center pb-4"
                >
                  <div className="col-span-6 flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <span className="font-medium">{product.name}</span>
                  </div>
                  <div className="col-span-3 text-right font-medium">
                    {product.price}
                  </div>
                  <div className="col-span-3 flex justify-end items-center gap-4">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="bg-[#FF3B3B] text-white px-4 py-1.5 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Button */}
            <div className="flex justify-center pt-6 border-t border-gray-300">
              <button
                className="bg-black text-white px-8 py-3 rounded-[20px] font-medium"
                onClick={() => setIsShippingModalOpen(true)}
              >
                Proceed to Checkout
              </button>
            </div>

            {/* Shipping Address Button */}
            <button
              className="flex items-center justify-between w-[496px] px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm hover:bg-gray-100"
              onClick={() => setIsShippingModalOpen(true)}
            >
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-lg">
                  <img src={star} alt="" />
                </span>
                <span className="text-lg font-medium text-gray-900">
                  Add Shipping address
                </span>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
                <ChevronUp size={18} className="text-gray-700" />
              </div>
            </button>
            <div className="mb-4 border border-gray-300 rounded-lg">
              <Features />
            </div>

            {isShippingModalOpen && (
              <ShippingModals
                isOpen={isShippingModalOpen}
                onClose={() => setIsShippingModalOpen(false)}
                onSubmit={handleModalSubmit}
              />
            )}
          </div>
        )}
      </div>

      {showOrderItem && <OrderSummary />}
    </div>
  );
}

export default Cart;
