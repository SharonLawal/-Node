import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div className="border-b py-4">
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
            onClick={() => onRemove(item.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}