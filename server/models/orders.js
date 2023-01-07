import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    number: Number,
    date: Date.now(),
    total: Number,
    products: Array
})

export default mongoose.model("Order", OrderSchema)