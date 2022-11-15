import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  roles: {
    type: Array,
    default: ["Customer"],
  },
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
