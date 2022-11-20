import registerService from "../services/register.js";
import loginService from "../services/login.js";
import refreshService from "../services/refresh.js";

const newRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const signUp = await registerService.register(
      firstName,
      lastName,
      email,
      password
    );
    return res.status(200).send(signUp);
  } catch (error) {
    res.send(error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { accessToken, refreshToken, userRole, username } =
      await loginService(email, password);
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "None",
      secure: true,
    });
    res.status(200).json({ accessToken, userRole, username });
  } catch (error) {
    res.status(401).json({ error });
    console.log(error);
  }
};

const refresh = async (req, res) => {
  try {
    const cookies = req.cookies;
    const { userRole, username, accessToken } = await refreshService(cookies);
    res.status(200).json({ userRole, username, accessToken });
  } catch (error) {
    res.status(403).json({ msg: "Unauthorized" });
  }
};

const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.status(204);
  }
  res.clearCookie("jwt", {
    httpOnly: true,
    // sameSite: "None",
  });
  res.json({ msg: "cookie cleared" });
};

export default { login, newRegister, refresh, logout };
