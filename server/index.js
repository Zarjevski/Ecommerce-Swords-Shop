// imports
import express from "express";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
// varibales
const app = express();
const port = 5000 || process.env.PORT;
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
// start
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
