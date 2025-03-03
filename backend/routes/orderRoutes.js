const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order (Frontend will send a POST request)
router.post('/order', orderController.createOrder);

// Route to get all orders
router.get('/orders', orderController.getAllOrders);

// Route to get a specific order by orderID
router.get('/orders/:id', orderController.getOrderById);

module.exports = router;
