const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  id: {
    type: Number, // Unique identifier for the product
    required: true,
    unique: true,
  },
  name: {
    type: String, // Name of the product
    required: true,
  },
  description: {
    type: String, // Description of the product
    required: true,
  },
  price: {
    type: Number, // Price of the product
    required: true,
  },
  crypto_price: {
    type: Number, // Price in cryptocurrency (ETH, BTC, etc.)
    required: true,
  },
  connectivity: {
    type: String, // Connectivity options (e.g., WiFi, Ethernet)
    required: true,
  },
  pre_installed_software: {
    type: String, // Pre-installed software details
    required: true,
  },
  image: {
    type: String, // URL or path of the product image
    required: true,
  },
  specs: {
    software: {
      type: String,
      enum: ['Dappnode', 'Stereum', 'Sege', 'Coincashew', 'Blockops'], // Available software options
      required: true,
      default: 'Dappnode', // Default selection
    },
    ram: {
      type: String,
      enum: ['16GB', '32GB', '64GB'], // RAM size options
      required: true,
      default: '16GB', // Default RAM size
    },
    storage: {
      type: String,
      enum: ['2TB SSD', '4TB SSD'], // Storage options
      required: true,
      default: '2TB SSD', // Default storage selection
    },
    processor: {
      type: String,
      enum: ['Intel i3', 'Intel i5', 'Intel i7'], // Processor choices
      required: true,
      default: 'Intel i3', // Default processor
    },
  },
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = { Product };
