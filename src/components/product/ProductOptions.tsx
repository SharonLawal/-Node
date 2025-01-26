import { Settings, HardDrive, Cpu } from 'lucide-react';
import { NodeConfig } from '../../types';
import { 
  SUPPORTED_NODE_SOFTWARE,
  RAM_OPTIONS,
  STORAGE_OPTIONS,
  PROCESSOR_OPTIONS
} from '../../config/constants';

interface ProductOptionsProps {
  config: NodeConfig;
  onChange: (config: NodeConfig) => void;
}

export default function ProductOptions({ config, onChange }: ProductOptionsProps) {
  const handleChange = (key: keyof NodeConfig, value: string) => {
    onChange({ ...config, [key]: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Settings className="h-5 w-5 text-green-500" />
        <select
          value={config.software}
          onChange={(e) => handleChange('software', e.target.value)}
          className="flex-1 rounded border-gray-300 focus:border-green-500 focus:ring-green-500"
        >
          {SUPPORTED_NODE_SOFTWARE.map(software => (
            <option key={software} value={software}>{software}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <HardDrive className="h-5 w-5 text-green-500" />
        <select
          value={config.ram}
          onChange={(e) => handleChange('ram', e.target.value)}
          className="flex-1 rounded border-gray-300 focus:border-green-500 focus:ring-green-500"
        >
          {Object.entries(RAM_OPTIONS).map(([value, { label, price }]) => (
            <option key={value} value={value}>
              {label}{price > 0 ? ` (+$${price})` : ''}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <HardDrive className="h-5 w-5 text-green-500" />
        <select
          value={config.storage}
          onChange={(e) => handleChange('storage', e.target.value)}
          className="flex-1 rounded border-gray-300 focus:border-green-500 focus:ring-green-500"
        >
          {Object.entries(STORAGE_OPTIONS).map(([value, { label, price }]) => (
            <option key={value} value={value}>
              {label}{price > 0 ? ` (+$${price})` : ''}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <Cpu className="h-5 w-5 text-green-500" />
        <select
          value={config.processor}
          onChange={(e) => handleChange('processor', e.target.value)}
          className="flex-1 rounded border-gray-300 focus:border-green-500 focus:ring-green-500"
        >
          {Object.entries(PROCESSOR_OPTIONS).map(([value, { label, price }]) => (
            <option key={value} value={value}>
              {label}{price > 0 ? ` (+$${price})` : ''}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}