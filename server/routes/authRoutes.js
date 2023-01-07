import express from "express";
// import {loginLimiter} from "../middleware/loginLimiter.js"
import authController from "../controllers/auth.js";
const router = express.Router();

router.post("/login",authController.login);
router.post("/logout",authController.logout)
router.post("/register",authController.newRegister);
router.get("/refresh",authController.refresh);

export default router;
