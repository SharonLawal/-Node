import { create } from 'zustand';
import { CartItem, Product, NodeConfig } from '../types';
import { calculatePrice } from '../utils/price';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, config: NodeConfig) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product, config) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => 
          item.id === product.id && 
          JSON.stringify(item.config) === JSON.stringify(config)
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item === existingItem
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      const price = calculatePrice(product, config);
      return {
        items: [
          ...state.items,
          {
            ...product,
            config,
            quantity: 1,
            totalPrice: price,
          },
        ],
      };
    });
  },
  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  },
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.totalPrice * item.quantity, 0);
  },
}));