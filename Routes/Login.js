import express from "express";
import { login, signUp } from "../Controller/loginController.js";

// build router
const router = express.Router();

//path for login
router.post("/", login);
router.post("/signup", signUp);

export default router;
