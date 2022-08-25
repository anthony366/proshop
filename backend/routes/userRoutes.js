import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";

// fetch all products from product controller
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protectedRoute, getUserProfile);

export default router;
