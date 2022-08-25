import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

// fetch all products
// public route
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); //gets everything from Product model
  res.json(products);
});

// fetch all products by ID
// public route
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
