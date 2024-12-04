import { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import PaymentButton from './PaymentButton';

export default function Cart() {
  const { items, removeItem, getTotalPrice } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-white hover:text-green-400"
      >
        <ShoppingCart className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.id} className="border-b py-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          {item.config.software} - {item.config.ram} - {item.config.storage} - {item.config.processor}
                        </p>
                        <p className="text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${item.totalPrice}</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6">
                  <div className="flex justify-between text-xl font-bold mb-4">
                    <span>Total:</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <PaymentButton amount={getTotalPrice()} />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}