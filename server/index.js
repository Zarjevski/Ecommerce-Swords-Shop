import express from 'express';
import  productRoutes from "./routes/products.js";
import registerRoutes from './routes/register.js';
import loginRoutes from './routes/login.js'
import connectDB from "./config/database.js";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = 5000 || process.env.PORT;



app.use(express.json());

// routes
app.use(cors())
app.use(express.static("../client/build"));
app.use('/login', loginRoutes)
app.use("/products", productRoutes);
app.use('/register', registerRoutes)


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
