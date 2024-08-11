import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { registation, login, logout, updateProfile } from "../controllers/userController.js";

const router = express.Router();
router.route("/register").post(registation);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, updateProfile);


export default router;