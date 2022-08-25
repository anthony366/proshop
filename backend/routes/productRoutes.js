import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// fetch all products from product controller
router.route("/").get(getProducts);

// fetch all products by ID from product controller
router.route("/:id").get(getProductById);

export default router;
