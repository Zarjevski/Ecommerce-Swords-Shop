import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const logIn = async (email, password) => {
  if (!email && !password) {
    throw "please fill the fields";
  }
  const user = await User.findOne({ email });
  if (user) {
    const checkPsw = await bcrypt.compare(password, user.password);
    if (!checkPsw) {
      throw "password incorrect";
    }
    // access token
    const username = user.firstName + " " + user.lastName;
    const userId = user._id;
    const userRole = user.roles;
    const accessToken = jwt.sign(
      { email, userId, username, userRole },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      }
    );

    // refresh token
    const refreshToken = jwt.sign(
      { email, userId, username, userRole },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    return { accessToken, refreshToken, userRole , username };
  } else if (!user || user === null) {
    throw "user dosent exist";
  }
};

export default logIn;
