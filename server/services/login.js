import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import User from '../models/user.js'

const logIn = async(email, password) => {
    const user = await User.findOne({email})
    if(user){
        const checkPsw = await bcrypt.compare(password, user.password)
        if (!checkPsw) {
            throw 'password incorrect'
        }
        const userId = user._id;
        const secretToken = process.env.TOKEN_SECRET
        const accessToken = jwt.sign({email, userId}, secretToken, {expiresIn:'1d'})
        return accessToken
    } else if (!user || user === null) {
        throw 'user dosent exist'
    }
}

export default {logIn}