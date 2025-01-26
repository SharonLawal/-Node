export interface ShipmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface NodeConfig {
  software: 'Dappnode' | 'Stereum' | 'Sege' | 'Coincashew' | 'Blockops';
  ram: '16GB' | '32GB' | '64GB';
  storage: '2TB SSD' | '4TB SSD';
  processor: 'Intel i3' | 'Intel i5' | 'Intel i7';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  specs: {
    defaultRam: string;
    defaultStorage: string;
    defaultProcessor: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
  config: NodeConfig;
  totalPrice: number;
}