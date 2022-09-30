const express = require("express");
const app = express();
require("dotenv").config();
const port = 5000 || process.env.PORT;
const productRoutes = require("./routes/products.js");
const registerRoutes = require('./routes/register.js');
const loginRoutes = require('./routes/login.js')
const connectDB = require("./config/database.js");


app.use(express.json());

// routes

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
