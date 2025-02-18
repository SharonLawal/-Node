import { create } from "zustand";
import { CartItem, Product, NodeConfig } from "../types";
import { calculatePrice } from "../utils/price";
import {
  RAM_OPTIONS,
  STORAGE_OPTIONS,
  PROCESSOR_OPTIONS,
} from "../config/constants";

// Zustand store for managing the shopping cart
interface CartStore {
  items: CartItem[]; // List of items in the cart
  addItem: (product: Product, config: NodeConfig, software: string) => void; // Function to add an item
  removeItem: (itemId: string) => void; // Function to remove an item by ID
  clearCart: () => void; // Function to clear the cart
  getTotalPrice: () => number; // Function to get total cart price
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (product, config, software) => {
    if (!config) {
      console.error("Missing config when adding item to cart:", product);
      return;
    }

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

      const totalPrice = calculatePrice(product.price, config);

      return {
        items: [
          ...state.items,
          {
            ...product,
            config: config, // Ensure config is properly set
            software: software || "Unknown", // Ensure software is set
            quantity: 1,
            totalPrice,
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
    return items.reduce(
      (total, item) => total + item.totalPrice * item.quantity,
      0
    );
  },
}));

// Pricing calculation based on selected options
export function calculatePrice(basePrice: number, config: NodeConfig): number {
  if (!config) {
    console.error("Config is undefined, returning base price.");
    return basePrice;
  }

  const ramPrice = RAM_OPTIONS[config.ram]?.price || 0;
  const storagePrice = STORAGE_OPTIONS[config.storage]?.price || 0;
  const processorPrice = PROCESSOR_OPTIONS[config.processor]?.price || 0;

  return basePrice + ramPrice + storagePrice + processorPrice;
}

// Supported Node Software
export const SUPPORTED_NODE_SOFTWARE = [
  "Dappnode",
  "Stereum",
  "Sege",
  "Coincashew",
  "Blockops",
] as const;

// Available RAM options and prices
export const RAM_OPTIONS = {
  "16GB": { label: "16GB RAM", price: 0 },
  "32GB": { label: "32GB RAM", price: 100 },
  "64GB": { label: "64GB RAM", price: 300 },
} as const;

// Available Storage options and prices
export const STORAGE_OPTIONS = {
  "2TB SSD": { label: "2TB SSD", price: 0 },
  "4TB SSD": { label: "4TB SSD", price: 200 },
} as const;

// Available Processor options and prices
export const PROCESSOR_OPTIONS = {
  "Intel i3": { label: "Intel i3", price: 0 },
  "Intel i5": { label: "Intel i5", price: 150 },
  "Intel i7": { label: "Intel i7", price: 300 },
} as const;
