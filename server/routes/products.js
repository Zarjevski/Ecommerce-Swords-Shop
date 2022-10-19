import express, { application } from "express";
const router = express.Router();
import productController from "../controllers/products.js";
import checkRole from "../middleware/checkRole.js"

router.get('/',productController.getProducts);
router.post('/',checkRole ,productController.createProduct)

export default router ;
