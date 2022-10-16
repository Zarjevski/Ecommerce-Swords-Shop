import express from "express";
// import {loginLimiter} from "../middleware/loginLimiter.js"
import authController from "../controllers/auth.js";
const router = express.Router();

router.route("/login").post(authController.login);
router.route("/register").post(authController.newRegister);
router.route("/refresh").get(authController.refresh);

export default router;
