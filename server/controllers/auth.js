import registerService from '../services/register.js'
import loginService from "../services/login.js";

// TODO make a public controller for customers and move the register and getProducts there since i need only the get method to be avalibale for public

const newRegister = async (req,res) => {
 try {
     const {name, email, password} = req.body
     const signUp = await registerService.register(name, email, password)
     return res.status(200).send(signUp)
 } catch (error) {
    res.send(error.message)
 }

}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const { accessToken, refreshToken } = await loginService.logIn(
        email,
        password
      );
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'None',
        // secure:true
      });
      res.status(200).json({ accessToken });
    } catch (error) {
      res.status(401).json({ error });
      console.log(error);
    }
  };

const refresh = async(req,res) => {
  const cookies = req.cookies
  if(!cookies?.jwt) {
    return res.send(403).json({msg: 'Unauthorized'})
  }
  const refreshToken = cookies.jwt
  res.send(refreshToken)
}

export default {login,newRegister,refresh}