export const SUPPORTED_NODE_SOFTWARE = [
  'Dappnode',
  'Stereum',
  'Sege',
  'Coincashew',
  'Blockops'
] as const;

export const RAM_OPTIONS = {
  "16GB": { label: '16GB RAM', price: 0 },
  "32GB": { label: '32GB RAM', price: 100 },
  "64GB": { label: '64GB RAM', price: 300 }
} as const;

export const STORAGE_OPTIONS = {
  "2TB SSD": { label: '2TB SSD', price: 0 },
  "4TB SSD": { label: '4TB SSD', price: 200 }
} as const;

export const PROCESSOR_OPTIONS = {
  "Intel i3": { label: 'Intel i3', price: 0 },
  "Intel i5": { label: 'Intel i5', price: 150 },
  "Intel i7": { label: 'Intel i7', price: 300 }
} as const;