const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer_email: { type: String, required: true },
    products: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    total_amount: { type: Number, required: true },
    payment_status: { type: String, enum: ["pending", "paid"], default: "pending" },
    shipping_address: { type: Object },
    billing_address: { type: Object },
    stripe_session_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
