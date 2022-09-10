import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js";
import { protectedRoute, admin } from "../middleware/authMiddleware.js";

// fetch all products from product controller
router.route("/").post(registerUser).get(protectedRoute, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protectedRoute, getUserProfile)
  .put(protectedRoute, updateUserProfile);

export default router;
