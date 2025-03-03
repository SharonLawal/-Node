const mongoose = require('mongoose');
const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    // Ensure each productID is converted to a valid MongoDB ObjectId
    req.body.products = req.body.products.map(product => ({
      ...product,
      productID: new mongoose.Types.ObjectId(product.productID) // Properly instantiate ObjectId
    }));

    const newOrder = new Order(req.body);
    await newOrder.save();
    
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: 'Error creating order', error });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderID: req.params.id });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error });
  }
};
