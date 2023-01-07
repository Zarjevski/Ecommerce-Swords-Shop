import express from 'express'
import auth from '../middleware/auth.js'
import userController from '../controllers/user.js'
const router = express.Router()


router.get("/", auth, userController.sendUserData)
router.patch("/", auth, userController.updateUser)

export default router