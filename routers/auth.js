import express from "express";
import * as Auth from "../controllers/auth.js";

export const authRouters = express.Router()

authRouters.post("/register/",Auth.register)
authRouters.post("/login/",Auth.login)