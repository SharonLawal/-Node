const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: { type: String, required: true, unique: true },
  customer: {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    country: String,
    state: String,
    deliveryAddress: String,
  },
  products: [
    {
      productID: String,
      name: String,
      price: Number,
      quantity: Number,
      customization: Object, // Can be further structured if needed
    },
  ],
  shippingInfo: {
    countryOfDelivery: String,
    stateOfDelivery: String,
    deliveryAddress: String,
    intendedUse: String,
  },
  totalPrice: Number,
  orderStatus: { type: String, default: 'Pending' },
  warranty: String,
  shippingPolicy: String,
  customerSupport: String,
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
