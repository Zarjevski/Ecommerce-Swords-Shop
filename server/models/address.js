import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    address: {
      type: String,
    },
    zipcode: {
      type: Number,
    },
    country: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
})

export default mongoose.model("Address", AddressSchema)