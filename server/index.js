const express = require("express");
const app = express();
require("dotenv").config();
const port = 5000 || process.env.PORT;
const productRoutes = require("./routes/products.js");
const registerRoutes = require('./routes/register.js')
const connectDB = require("./db/connect");

app.use(express.json());
app.use("/products", productRoutes);
app.use('/register', registerRoutes)
app.use(express.static("../client/public"));

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
