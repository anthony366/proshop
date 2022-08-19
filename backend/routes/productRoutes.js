import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

const router = express.Router();

// fetch all products
// public route
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); //gets everything from Product model
    res.json(products);
  })
);

// fetch all products by ID
// public route
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
