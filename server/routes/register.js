import express from 'express'
const router = express.Router()
import registerController from '../controllers/register.js'

router.post('/', registerController.newRegister)

export default router