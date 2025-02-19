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
      // Check if the item with the same configuration already exists
      const existingItem = state.items.find(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.config) === JSON.stringify(config)
      );

      if (existingItem) {
        // Increase quantity if item exists
        return {
          items: state.items.map((item) =>
            item === existingItem
              ? { ...item, quantity: item.quantity + 1, totalPrice: calculatePrice(product.price, config) * (item.quantity + 1) }
              : item
          ),
        };
      }

      // Calculate price for new item
      const price = calculatePrice(product.price, config);

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
    return items.reduce((total, item) => total + item.totalPrice, 0);
  },
}));
