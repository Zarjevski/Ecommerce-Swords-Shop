const registerService = require('../services/register.js')

const register = async (req,res) => {
 try {
     const register = req.body
     const signUp = await registerService.register(register)
     return res.status(200).send(signUp)
 } catch (error) {
     console.log(error);
 }

}

module.exports = {register}