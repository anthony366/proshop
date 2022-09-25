import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protectedRoute, admin } from "../middleware/authMiddleware.js";

// fetch all products from product controller
router.route("/").post(registerUser).get(protectedRoute, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protectedRoute, getUserProfile)
  .put(protectedRoute, updateUserProfile);
router
  .route("/:id")
  .delete(protectedRoute, admin, deleteUser)
  .get(protectedRoute, admin, getUserById)
  .put(protectedRoute, admin, updateUser);

export default router;
