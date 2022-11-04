import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      default: "Customer",
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
  billing: {
    required: false,
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
  },
});

export default mongoose.model("User", UserSchema);
