const registerService = require('../services/register.js')

const newRegister = async (req,res) => {
 try {
     const {name, email, password} = req.body
     const signUp = await registerService.register(name, email, password)
     return res.status(200).send(signUp)
 } catch (error) {
    res.send(error.message)
 }

}

module.exports = {newRegister}