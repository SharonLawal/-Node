import con from "../../assets/Container (35).png";
import { FaSearch } from "react-icons/fa";

export default function ProductSearch({ filters, setFilters, isModalOpen, setIsModalOpen }: {filters: any, setFilters: any, isModalOpen: any, setIsModalOpen: any}) {
  return (
    <div className="flex items-center justify-between w-full  space-x-4 py-4">
      {/* Sort Dropdown */}
      <div className="border border-cyan-400 rounded-full px-4 py-2 text-sm text-black flex items-center cursor-pointer"
        onClick={() => setIsModalOpen(!isModalOpen)}  >
        Sort by - Processors{" "}
        <span className="ml-2">
          <img src={con} alt="" />
        </span>
      </div>

      {/* Search Input */}
      <div className="border border-cyan-400 rounded-lg px-4 py-2 flex items-center w-[544px] max-w-sm h-[53px]">
        <FaSearch className="text-cyan-400 mr-2" />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          placeholder="Search by brands and products"
          className="bg-transparent text-black text-sm focus:outline-none w-full"
        />
      </div>
    </div>
  );
}
