import { NodeConfig } from '../types';
import { RAM_OPTIONS, STORAGE_OPTIONS, PROCESSOR_OPTIONS } from '../config/constants';

export function calculatePrice(basePrice: number, config: NodeConfig): number {
  return basePrice +
    RAM_OPTIONS[config.ram].price +
    STORAGE_OPTIONS[config.storage].price +
    PROCESSOR_OPTIONS[config.processor].price;
}