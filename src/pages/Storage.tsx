import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Storage = ({primaryStorageOptions}: any) => {
  const [selectedPrimaryStorage, setSelectedPrimaryStorage] = useState(
    "1TB SSD"
  );
  const [secondaryStorage, setSecondaryStorage] = useState("None.");
  const [isOpenPrimary, setIsOpenPrimary] = useState(false);


  return (
    <div className="p-5 space-y-3">
      <div className="flex gap-8 items-center">
        <div className="bg-black rounded-full text-white w-[80px] h-[80px] flex justify-center items-center">
          <p className="text-[30px]">
            <strong>2</strong>
          </p>
        </div>primaryStorageOptions
        <p className="text-[40px]">Storage</p>
      </div>

      {/* Primary Hard Drive */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg  w-[1200px] ">
        <span className="text-sm font-medium ml-5">Primary Hard Drive</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 ">
          <select
            className="text-black text-sm px-4 py-2 pr-8 rounded-lg outline-none cursor-pointer appearance-none bg-white w-[480px] border-none"
            value={selectedPrimaryStorage}
            onChange={(e) => setSelectedPrimaryStorage(e.target.value)}
            onFocus={() => setIsOpenPrimary(true)}
            onBlur={() => setIsOpenPrimary(false)}
            onClick={() => setIsOpenPrimary(!isOpenPrimary)}
          >
            {primaryStorageOptions?.map((option: any, index: any) => (
              <option key={index} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
          <div className="absolute right-3 pointer-events-none">
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isOpenPrimary ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Secondary Hard Drive */}
      <div className="flex items-center justify-between text-black p-3 rounded-lg  w-[1200px] ">
        <span className="text-sm font-medium ml-5">Secondary Hard Drive</span>
        <div className="relative border border-black rounded-lg flex items-center px-3 ">
          <input
            type="text"
            placeholder="None."
            className="text-black text-sm px-4 py-2 rounded-lg outline-none bg-white border-none w-[480px]"
            value={secondaryStorage}
            onChange={(e) => setSecondaryStorage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Storage;
