import { NodeConfig } from '../types';
import { RAM_OPTIONS, STORAGE_OPTIONS, PROCESSOR_OPTIONS } from '../config/constants';

export function calculatePrice(basePrice: number, config: NodeConfig): number {
  if (!config) {
    console.error("Config is undefined, returning base price.");
    return basePrice; // Return base price if config is missing
  }

  const ramPrice = RAM_OPTIONS[config.ram]?.price || 0;
  const storagePrice = STORAGE_OPTIONS[config.storage]?.price || 0;
  const processorPrice = PROCESSOR_OPTIONS[config.processor]?.price || 0;

  return basePrice + ramPrice + storagePrice + processorPrice;
}
