import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protectedRoute, admin } from "../middleware/authMiddleware.js";

// fetch all products from product controller
router.route("/").get(getProducts).post(protectedRoute, admin, createProduct);

// fetch all products by ID from product controller
router
  .route("/:id")
  .get(getProductById)
  .delete(protectedRoute, admin, deleteProduct)
  .put(protectedRoute, admin, updateProduct);

export default router;
