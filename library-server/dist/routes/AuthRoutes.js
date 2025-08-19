"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../controllers/AuthController");
const Validation_1 = require("../middlewares/Validation");
const router = express_1.default.Router();
router.post("/register", (0, Validation_1.ValidateSchema)(Validation_1.Schema.user.create), AuthController_1.handleRegister);
router.post("/login", (0, Validation_1.ValidateSchema)(Validation_1.Schema.user.login), AuthController_1.handleLogin);
exports.default = router;
