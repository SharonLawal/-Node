import React from "react";

interface SystemCostCardProps {
  price: string;
}

const SystemCostCard: React.FC<SystemCostCardProps> = ({ price }) => (
  <div className="bg-white shadow-lg rounded-[26px] overflow-hidden w-[350px] h-[250px] text-center border rounded-t-4xl space-y-6">
    <div className="bg-black text-white py-3 text-lg font-bold rounded-t-3xl">
      System cost
    </div>
    <div className="py-6 text-3xl font-bold text-cyan-500">₦{price}</div>
    <div className="pb-4">
      <button className="bg-black text-white px-6 py-2 rounded-[16px] w-[200px]">
        Add to cart
      </button>
    </div>
  </div>
);

export default SystemCostCard;