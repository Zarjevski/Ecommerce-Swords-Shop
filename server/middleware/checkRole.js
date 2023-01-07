import jwt from "jsonwebtoken"

const checkRole = (req,res,next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new Error('not authorized')
    }
    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const role = decoded.userRole || decoded.decoded.userRole
    if (!role.includes('Admin')) {
        throw new Error('not admin')
    }
    next()

}

export default checkRole