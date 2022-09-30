const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

const logIn = async(name, password) => {
    const user = await User.findOne({name})
    if (!user) {
        throw new Error('no such user')
    }
    console.log(user);
}

module.exports = {logIn}