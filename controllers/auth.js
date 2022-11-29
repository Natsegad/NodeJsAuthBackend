import User from "../model/user.js"
import {generateJwtById} from "../utils/jwt.js"
import {validationResult} from "express-validator";
import jsonwebtoken from "jsonwebtoken"
import mongoose from "mongoose";

export const register = async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            res.status(400).json({
                error: error
            })
            return
        }

        const doc = new User({
            email: req.body.email,
            name: req.body.name,
            passwordHash: req.body.password,
        })

        const user = await doc.save()
        console.log(user.email, user.passwordHash, user.name)

        const token = generateJwtById(user._id)

        res.status(200).json(
            {
                token: token,
            }
        )
    } catch (e) {
        res.status(400).json({
            error: e
        })
    }
}

// Example
// json {email:"",password:""}
export const login = async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            res.status(400).json({
                error: error
            })
            return
        }

        const user = await User.findOne({email: req.body.email, passwordHash: req.body.password})
        if (!user) {
            res.status(404).json({
                error: "Error request not found user"
            })
            return
        }
        const token = generateJwtById(user._id)
        res.status(200).json({
            token: token,
            login: "ok"
        })

    } catch (e) {
        res.status(400).json({
            error: e
        })
    }
}