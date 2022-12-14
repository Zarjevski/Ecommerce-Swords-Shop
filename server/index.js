// imports
import express from "express";
import userRoutes from './routes/userRoutes.js'
import productRoutes from "./routes/productsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
// variables
const app = express();
const port = 5000 || process.env.PORT;
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:3000',credentials: true}));
// routes
app.use('/user', userRoutes)
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
