import  express  from "express";
const router = express.Router()
import adminController from '../controllers/admin.js'

router.get('/', adminController.dashboard)

export default router 