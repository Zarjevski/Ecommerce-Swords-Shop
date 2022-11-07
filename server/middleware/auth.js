import jwt from 'jsonwebtoken'

const auth = (req, res , next) => {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith('Bearer')){
        res.status(403)
        throw new Error('not authorized')
    }
    const token = authHeaders.split(' ')[1]
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const {email,userId,userRole} = decoded
    req.user = {email,userId,userRole}
    next()
}

export default auth