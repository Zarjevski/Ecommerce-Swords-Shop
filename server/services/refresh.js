import jwt from "jsonwebtoken";

const newAccessToken = (cookies) => {
  if (!cookies?.jwt || !cookies) {
    throw new Error('NO COOKIES KIDS');
  }
  const refreshToken = cookies.jwt;
  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  if (!decoded) return new Error("Unauthorized");
  const accessToken = jwt.sign({ decoded }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  return accessToken;
};

export default newAccessToken;
