import express from 'express';
import userController from '../controllers/user.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.get('/', auth, userController.user)

export default router