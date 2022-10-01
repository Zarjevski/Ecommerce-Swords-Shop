import  mongoose from "mongoose";

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

export default  mongoose.model("Product", ProductSchema);