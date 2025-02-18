import { useState } from "react";
import Select from "react-select";
import countryData from "country-telephone-data";

const countryOptions = countryData.allCountries.map((country) => ({
  value: `+${country.dialCode}`,
  label: (
    <div className="flex items-center">
      <img
        src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
        alt={country.name}
        className="w-6 h-4 mr-2"
      />
      {`+${country.dialCode}`}
    </div>
  ),
}));

const ShippingInformationModal = ({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: any;
}) => {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(); // Call the function if provided
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-[600px] flex flex-col justify-center mt-12">
        {/* Modal Header */}
        <div className="flex justify-between bg-[#101323] h-[100px] p-9 rounded-t-md">
          <h2 className="text-2xl font-bold text-white mb-4">
            Shipping Information
          </h2>
          <button
            onClick={onClose}
            className="text-white bg-gray-600 rounded-full w-[30px] h-[30px]"
          >
            ✕
          </button>
        </div>
        {/* Form Container */}
        <div className="p-5 space-y-4">
          <div className="p-6 border border-gray-300 rounded-lg">
            <form className="space-y-4">
              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border p-2 rounded-[16px] w-full h-[55px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium">Last Name</label>
                  <input
                    type="text"
                    className="border p-2 rounded-[16px] w-full h-[55px]"
                  />
                </div>
              </div>

              {/* Email & Phone Number */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    className="border rounded-[16px] p-2 w-full h-[55px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <div className="flex items-center border rounded-[16px] p-2 w-full bg-gray-100">
                    <div className="w-[120px] ">
                      <Select
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={(newValue) =>
                          setSelectedCountry(newValue || countryOptions[0])
                        }
                        classNamePrefix="country-select"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            minWidth: "100px",
                            border: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent",
                          }),
                          dropdownIndicator: (provided) => ({
                            ...provided,
                            padding: "0px",
                          }),
                          valueContainer: (provided) => ({
                            ...provided,
                            padding: "0px",
                          }),
                        }}
                      />
                    </div>
                    <input
                      type="text"
                      className="flex-1 outline-none px-2  w-[50px]"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
              {/* Country & State of Delivery */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium">
                    Country of Delivery
                  </label>
                  <input
                    type="text"
                    className="border p-2 rounded-[16px] w-full h-[55px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium">
                    State of Delivery
                  </label>
                  <input
                    type="text"
                    className="border p-2 rounded-[16px] w-full h-[55px]"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">
                  Delivery Address
                </label>
                <input
                  type="text"
                  className="border p-2 rounded-[16px] w-full h-[55px]"
                />
              </div>

              {/* Custom PC Usage */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">
                  What would you use Node Hub custom PC for? (Optional)
                </label>
                <textarea className="border p-2 rounded-[16px] w-full"></textarea>
              </div>
            </form>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white py-2 rounded-[24px] w-[200px]"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInformationModal;
