const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 5000;
const products = require("./routes/products");
const connectDB = require("./db/connect");

app.use(express.json());
app.use("/products", products);
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
