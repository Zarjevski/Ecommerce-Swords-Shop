import express from 'express';
import  productRoutes from "./routes/products.js";
import registerRoutes from './routes/register.js';
import loginRoutes from './routes/login.js'
import adminRoutes from './routes/admin.js';
import connectDB from "./config/database.js";
import cors from 'cors'
import dotenv from 'dotenv'
import * as cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = 5000 || process.env.PORT;
// middleware
app.use(express.json());
app.use(cors())
app.use(express.static("../client/build"));
app.use(cookieParser())

// routes
app.use('/login', loginRoutes)
app.use("/products", productRoutes);
app.use('/register', registerRoutes)
app.use('/admin', adminRoutes)

// start
const mongooseInputConfig = {useNewUrlParser: true, useUnifiedTopology: true}
const startServer = async () => {
  try {
    const mongoUri = process.env.MONGO_URI
    await connectDB(mongoUri, mongooseInputConfig);
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};


startServer();
