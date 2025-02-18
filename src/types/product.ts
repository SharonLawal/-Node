export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  crypto_price: string;
  brand: string;
  rating: number;
  inStock: boolean;
  image: string;
  processor: string;
  ram: string;
  storage: string;
  connectivity: string;
  pre_installed_software: string;
  supported_blockchains: string[];
  warranty: string;
  shipping: string;
  payment_options: string[];
  details: string;
  specs: {
    ram: string;
    processor: string;
    ssd: string;
  };
};

export type FilterState = {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  brands: string[];
  minRating: number;
  inStockOnly: boolean;
  ram: string[];
  processor: string[];
  ssd: string[];
};