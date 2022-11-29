import express from "express";
import * as Auth from "../controllers/auth.js";
import {regValidate,loginValidate,loginReqValidator} from "../utils/validators.js";

export const authRouters = express.Router()

authRouters.post("/register/",regValidate,Auth.register)
authRouters.post("/login/",loginReqValidator,loginValidate,Auth.login)