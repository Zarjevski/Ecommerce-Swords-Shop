import express from "express";
const router = express.Router();
import productController from "../controllers/products.js";

router.get('/',productController.getProducts);

// all the rest need to be role based auth
router.post('/', productController.createProduct)

export default router ;
