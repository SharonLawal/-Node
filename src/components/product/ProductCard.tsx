import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Product, NodeConfig } from '../../types';
import { useCartStore } from '../../store/cartStore';
import { calculatePrice } from '../../utils/price';
import ProductOptions from './ProductOptions';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [config, setConfig] = useState<NodeConfig>({
    software: 'Dappnode',
    ram: product.specs.defaultRam as NodeConfig['ram'],
    storage: product.specs.defaultStorage as NodeConfig['storage'],
    processor: product.specs.defaultProcessor as NodeConfig['processor']
  });

  const handleAddToCart = () => {
    addItem(product, config);
  };

  const price = calculatePrice(product, config);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <ProductOptions config={config} onChange={setConfig} />

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">${price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}