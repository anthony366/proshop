import express from "express";
const router = express.Router();

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} from "../controllers/orderController.js";
import { protectedRoute, admin } from "../middleware/authMiddleware.js";

// add order items
router
  .route("/")
  .post(protectedRoute, addOrderItems)
  .get(protectedRoute, admin, getOrders);
router.route("/myorders").get(protectedRoute, getMyOrders);
router.route("/:id").get(getOrderById);
router.route("/:id/pay").get(updateOrderToPaid);

export default router;
