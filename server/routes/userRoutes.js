import express from 'express'
import auth from '../middleware/auth.js'
import getUserData from '../controllers/user.js'
const router = express.Router()


router.route('/').get(auth,getUserData)

export default router