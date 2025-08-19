import express from "express";
import { handleLogin, handleRegister } from "../controllers/AuthController";
import { ValidateSchema, Schema } from "../middlewares/Validation";
const router = express.Router();
router.post("/register", ValidateSchema(Schema.user.create), handleRegister);
router.post("/login", ValidateSchema(Schema.user.login), handleLogin);
export default router;
