const { Product } = require("../models/Product");

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("Fetched Products:", products.map(p => ({ id: p._id, price: p.price }))); // Log product IDs and prices

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      console.log("Product not found with ID:", req.params.id);
      return res.status(404).json({ message: "Product not found" });
    }

    console.log("Fetched Product:", { id: product._id, price: product.price }); // Log product ID and price
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};

module.exports = { getAllProducts, getProductById };
