import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'mini-pc-1',
    name: 'EcoNode Starter',
    description: 'Perfect for beginners entering the Ethereum ecosystem. This energy-efficient setup comes with pre-configured node software and essential hardware specifications. Ideal for running a full node or getting started with validation. Features quiet operation and compact design, perfect for home or office environments.',
    basePrice: 599,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '16GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i3'
    }
  },
  {
    id: 'mini-pc-2',
    name: 'EcoNode Pro',
    description: 'Advanced configuration designed for serious validators and developers. Enhanced processing power and memory for superior performance. Supports multiple clients and testing environments simultaneously. Includes premium thermal management and redundant storage options for maximum reliability.',
    basePrice: 899,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '32GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i5'
    }
  },
  {
    id: 'mini-pc-3',
    name: 'EcoNode Enterprise',
    description: 'Our flagship model for institutional validators and professional node operators. Maximum performance with enterprise-grade components. Supports multiple validators with room for expansion. Features advanced cooling, redundant power options, and premium build quality for 24/7 operation.',
    basePrice: 1299,
    image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '64GB',
      defaultStorage: '4TB SSD',
      defaultProcessor: 'Intel i7'
    }
  },
  {
    id: 'mini-pc-4',
    name: 'EcoNode Lite',
    description: 'Compact and energy-efficient solution optimized for light node operators. Perfect for running execution or consensus clients with minimal power consumption. Features passive cooling for silent operation and reliable performance in a space-saving design.',
    basePrice: 499,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '16GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i3'
    }
  },
  {
    id: 'mini-pc-5',
    name: 'EcoNode Plus',
    description: 'Enhanced performance model with balanced specifications for smooth validator operations. Optimized for reliability and efficiency with premium components. Includes advanced monitoring capabilities and robust cooling solution for consistent performance.',
    basePrice: 799,
    image: 'https://images.unsplash.com/photo-1587202372162-638fa1791a43?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '32GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i5'
    }
  },
  {
    id: 'mini-pc-6',
    name: 'EcoNode Ultra',
    description: 'Ultimate performance solution for professional node operators. Designed for multi-client setups and advanced testing environments. Features premium build quality, maximum expandability, and enterprise-grade reliability. Includes advanced management features and priority support.',
    basePrice: 1499,
    image: 'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '64GB',
      defaultStorage: '4TB SSD',
      defaultProcessor: 'Intel i7'
    }
  },
  {
    id: 'mini-pc-7',
    name: 'EcoNode Compact',
    description: 'Space-saving design without compromising on performance. Perfect for operators with limited space. Features optimized airflow, efficient power delivery, and whisper-quiet operation. Ideal for home offices or small installations.',
    basePrice: 699,
    image: 'https://images.unsplash.com/photo-1591489601402-927a9e5a11cf?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '16GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i5'
    }
  },
  {
    id: 'mini-pc-8',
    name: 'EcoNode Max',
    description: 'Maximum capacity configuration for demanding network conditions. Engineered for professional validators handling multiple clients. Features redundant storage, advanced cooling solution, and premium components throughout. Includes priority support and extended warranty.',
    basePrice: 1699,
    image: 'https://images.unsplash.com/photo-1591489630658-a5b3f2b4c5cc?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '64GB',
      defaultStorage: '4TB SSD',
      defaultProcessor: 'Intel i7'
    }
  },
  {
    id: 'mini-pc-9',
    name: 'EcoNode Essential',
    description: 'Essential features for reliable node operation in a value-focused package. Balanced configuration suitable for most validation needs. Includes efficient cooling, reliable components, and all necessary software pre-configured for immediate deployment.',
    basePrice: 649,
    image: 'https://images.unsplash.com/photo-1591489630370-1d17b92b4169?auto=format&fit=crop&q=80&w=800',
    specs: {
      defaultRam: '16GB',
      defaultStorage: '2TB SSD',
      defaultProcessor: 'Intel i3'
    }
  }
];