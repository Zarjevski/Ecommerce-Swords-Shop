import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
  },
  category: {
    type: String
  }
});

export default mongoose.model("Product", ProductSchema);
