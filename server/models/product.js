import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
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
  },
  img: [String]
});

export default mongoose.model("Product", ProductSchema);
