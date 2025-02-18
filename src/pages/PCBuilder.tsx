import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useCartStore } from "../store/cartStore";
import Storage from "./Storage";
import CasingAndCooling from "./CasingAndCooling";
import Software from "./Software";
import Accessories from "./Accessories";
import CourtesyInstall from "./CourtesyInstall";
import AdditionalComments from "./AdditionalComments";
import Features from "./Features";

const SystemCostCard: React.FC<{ price: string; onAddToCart: () => void }> = ({ price, onAddToCart }) => (
  <div className="bg-white shadow-lg rounded-[26px] overflow-hidden w-[350px] h-[250px] text-center border rounded-t-4xl space-y-6">
    <div className="bg-black text-white py-3 text-lg font-bold rounded-t-3xl">System cost</div>
    <div className="py-6 text-3xl font-bold text-cyan-500">₦{price}</div>
    <div className="pb-4">
      <button onClick={onAddToCart} className="bg-black text-white px-6 py-2 rounded-[16px] w-[200px]">
        Add to cart
      </button>
    </div>
  </div>
);

const PCBuilder = () => {
  const { addToCart } = useCartStore();
  const [selectedCPU, setSelectedCPU] = useState(
    "Intel Core i5 12400f 2.5GHz (Up To 4.4GHz Turbo) 6 Core 65W."
  );
  const [selectedRAM, setSelectedRAM] = useState("16GB DDR5-5600 (2x8GB)");
  const [selectedGPU, setSelectedGPU] = useState("NVIDIA GeForce RTX 3060 12GB");
  const [additionalGPU, setAdditionalGPU] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({});

  const cpuOptions = [
    "Intel Core i5 12400f 2.5GHz (Up To 4.4GHz Turbo) 6 Core 65W.",
    "Intel Core i7 13700k 3.4GHz (Up To 5.4GHz Turbo) 16 Core 125W.",
    "AMD Ryzen 7 5800X 3.8GHz (Up To 4.7GHz Turbo) 8 Core 105W.",
    "Apple M1 Max (10-core CPU, 32-core GPU).",
  ];

  const ramOptions = [
    "16GB DDR5-5600 (2x8GB)",
    "32GB DDR5-6000 (2x16GB)",
    "64GB DDR5-6400 (2x32GB)",
  ];

  const gpuOptions = [
    "NVIDIA GeForce RTX 3060 12GB",
    "NVIDIA GeForce RTX 4070 Ti 16GB",
    "AMD Radeon RX 6800 XT 16GB",
    "AMD Radeon RX 7900 XTX 24GB",
  ];

  const handleAddToCart = () => {
    const config = Object.keys(selectedOptions).length > 0 ? selectedOptions : product.specs;
  
    if (!config.software || !config.ram || !config.storage || !config.processor) {
      console.error("Missing config when adding item to cart:", config);
      return;
    }
  
    addItem(product, config, config.software);
  };
  
  

  return (
    <div className="relative p-5 space-y-3">
      <div className="gap-4 border-2 border-dashed border-gray-400 p-4 rounded-lg w-full">
        <div className="text-black text-3xl font-bold">Customize your PC</div>
        <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
          <SystemCostCard price="1,500,950" onAddToCart={handleAddToCart} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex gap-8 items-center">
          <div className="bg-black rounded-full text-white w-[80px] h-[80px] flex justify-center items-center">
            <p className="text-[30px]"><strong>1</strong></p>
          </div>
          <p className="text-[40px]">System core</p>
        </div>
      </div>

      {/* Platform Selection */}
      <div className="flex gap-60 text-black items-center ml-8 justify-between w-[920px]">
        <p>Platform</p>
        <p><strong>Intel Core B760M D5 Mid Tower </strong></p>
      </div>
      <div className="flex gap-60 text-black items-center ml-8 justify-between w-[940px]">
        <p>Motherboard</p>
        <p><strong>B760M Wi-Fi D5 (Intel B760 MATX) </strong></p>
      </div>

      {/* CPU Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">CPU</span>
        <div className="relative border border-black rounded-lg flex items-center px-3">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-full border-none"
            value={selectedCPU}
            onChange={(e) => setSelectedCPU(e.target.value)}
          >
            {cpuOptions.map((cpu, index) => (
              <option key={index} value={cpu}>{cpu}</option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* RAM Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">RAM</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 w-[480px]">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-full border-none"
            value={selectedRAM}
            onChange={(e) => setSelectedRAM(e.target.value)}
          >
            {ramOptions.map((ram, index) => (
              <option key={index} value={ram}>{ram}</option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* GPU Selection */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">Video Card</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 w-[480px]">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-full border-none"
            value={selectedGPU}
            onChange={(e) => setSelectedGPU(e.target.value)}
            // onFocus={() => setIsOpenGPU(true)}
            // onBlur={() => setIsOpenGPU(false)}
            // onClick={() => setIsOpenGPU(!isOpenGPU)}
          >
            {gpuOptions.map((gpu, index) => (
              <option key={index} value={gpu} className="text-black">
                {gpu}
              </option>
            ))}
          </select>

          {/* Dropdown Icon */}
          {/* <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isOpenGPU ? "rotate-180" : ""
              }`}
            />
          </div> */}
        </div>
      </div>

      <div className="flex items-center justify-between text-black p-3 rounded-lg w-[1200px]">
        <span className="text-sm font-medium ml-5">Additional Video Card</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 w-[480px]">
          <input
            type="text"
            placeholder="None."
            className="text-black text-sm px-4 py-2 rounded-lg outline-none  bg-white border-none w-[480px]"
            value={additionalGPU}
            onChange={(e) => setAdditionalGPU(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-60 text-black items-center ml-8 justify-between w-[920px]">
        <p>Networking</p>
        <p className="mr-32">
          <strong>Integrated Wi-Fi </strong>
        </p>
      </div>
      <Storage />
      <CasingAndCooling />
      <Software />
      <Accessories />
      <CourtesyInstall />
      <AdditionalComments />
      <Features />
    </div>
  );
};

export default PCBuilder;
