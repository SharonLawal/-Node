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
  storage: '1TB SSD' |'2TB SSD' | '4TB SSD';
  processor: 'Intel i3' | 'Intel i5' | 'Intel i7';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice?: number;
  image: string;
  price: string;
  specs?: {
    ram: string;
    storage: string;
    processor: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
  config: NodeConfig;
  totalPrice: number;
}


// types.ts
export interface IProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  details: string;
  processor: string;
  payment_options: [];
  ram: string;
  storage: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    software: string;
  };
  supported_blockchains: string[];
  pre_installed_software: string;
}

// types.ts
export interface ICartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}