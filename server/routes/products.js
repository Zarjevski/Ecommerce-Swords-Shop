import express from "express";
const router = express.Router();
import productController from "../controllers/products.js";

router.get('/',productController.getProducts);
router.post('/', productController.createProduct)

export default router ;
