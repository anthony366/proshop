// using 'import' for ES6 modules instead of Commom JS modules
import express from "express";
import "dotenv/config"; //ES6 version of using dotenv with 'import'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

// all routes from backend
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
const MODE = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running in ${MODE} mode on port ${PORT}`);
});
