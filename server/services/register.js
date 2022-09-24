const Register = require('../models/register.js')

const register = async(register) => {
    const newRegister = Register.create(register)
    return newRegister
}

module.exports = {register}