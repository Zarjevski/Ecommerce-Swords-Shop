import express from "express";
const router = express.Router();
import productController from "../controllers/products.js";
import checkRole from "../middleware/checkRole.js"

router.get('/',productController.getProducts);
router.get('/:category', productController.getProducts)
router.get('/product/:id', productController.getOneProduct)
router.patch('/edit/:id', checkRole, productController.updateProduct)
router.post('/',checkRole ,productController.createProduct)
router.delete('/',checkRole, productController.deleteProduct)

export default router ;
