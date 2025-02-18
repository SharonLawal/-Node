import { RAM_OPTIONS, STORAGE_OPTIONS, PROCESSOR_OPTIONS } from '../config/constants';

export function calculatePrice(config: {
  software: string;
  ram?: keyof typeof RAM_OPTIONS;
  storage?: keyof typeof STORAGE_OPTIONS;
  processor?: keyof typeof PROCESSOR_OPTIONS;
}) {
  const {
    software,
    ram = "16GB" as keyof typeof RAM_OPTIONS,
    storage = "2TB SSD" as keyof typeof STORAGE_OPTIONS,
    processor = "Intel i3" as keyof typeof PROCESSOR_OPTIONS,
  } = config;

  console.log("Config values in calculatePrice:", { software, ram, storage, processor });

  const ramPrice = RAM_OPTIONS[ram]?.price || 0;
  const storagePrice = STORAGE_OPTIONS[storage]?.price || 0;
  const processorPrice = PROCESSOR_OPTIONS[processor]?.price || 0;

  const totalPrice = ramPrice + storagePrice + processorPrice;

  console.log("Final calculated price:", totalPrice);

  return totalPrice;
}
