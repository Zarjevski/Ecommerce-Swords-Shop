import bcrypt from "bcryptjs";
import User from "../models/user.js";

const register = async (firstName, lastName, email, password) => {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("user already exist");
  }
  if (!(firstName, lastName, email, password)) {
    throw new Error("all inputs are required");
  }
  const encryptedPass = await bcrypt.hash(password, 10);
  const createRegister = User.create({
    firstName,
    lastName,
    email: email.toLowerCase(),
    password: encryptedPass,
  });
  return createRegister;
};

export default { register };
