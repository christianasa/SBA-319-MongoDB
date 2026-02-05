// Imports
import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";
import connectDB from "./db/conn.js";
import brandRoutes from "./routes/brandRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// Middlewares
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/brands", brandRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

// Global Error Handling
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});