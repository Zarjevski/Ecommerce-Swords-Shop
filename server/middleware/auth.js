import jwt from 'jsonwebtoken'

const auth = (req, res , next) => {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith('Bearer')){
        throw new Error('not authorized')
    }
    const token = authHeaders.split(' ')[1]
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    const {email,userId,roles} = decoded
    
    req.user = {email,userId,roles}
    next()
}

export default auth