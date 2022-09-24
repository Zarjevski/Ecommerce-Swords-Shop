const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  dec: {
    type: String,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
