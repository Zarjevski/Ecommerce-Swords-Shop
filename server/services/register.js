const bcrypt = require('bcryptjs')

const User = require('../models/user.js')

const register = async(name, email, password) => {
    const existing = await User.findOne({email})
    if (existing) {
        throw new Error('user already exist')
    }
    if(!(name, email, password)) {
        throw new Error('all inputs are required')
    }
    const encryptedPass = await bcrypt.hash(password, 10)
    const createRegister = User.create({
        name,
        email: email.toLowerCase(),
        password: encryptedPass,
    })
    return createRegister
}

module.exports = {register}