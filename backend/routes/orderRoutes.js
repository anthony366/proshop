import express from "express";
const router = express.Router();

import { addOrderItems } from "../controllers/orderController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";

// add order items
router.route("/").post(protectedRoute, addOrderItems);

export default router;
