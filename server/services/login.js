import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const logIn = async(email, password) => {
    const user = await User.findOne({email})
    if(user){
        const checkPsw = await bcrypt.compare(password, user.password)
        if (!checkPsw) {
            throw 'password incorrect'
        }
        const secretToken = process.env.TOKEN_SECRET
        const token = jwt.sign({email, password},secretToken)
        console.log(token);
    } else {
        throw 'email or password incorrect'
    }
}

export default {logIn}