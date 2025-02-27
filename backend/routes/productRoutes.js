/**
 * Product Routes
 * Handles retrieving all products and fetching a single product by ID.
 */

const express = require("express");
const { getAllProducts, getProductById } = require("../controllers/productController");
const router = express.Router();

router.get("/products", getAllProducts);  // Fetch all products
router.get("/products/:id", getProductById);  // Fetch product by ID

module.exports = router;
