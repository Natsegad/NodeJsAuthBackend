import User from "../model/user.js"
import {generateJwtById} from "../utils/jwt.js"
import {validationResult} from "express-validator";

export const register = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error){
            
            res.status(400).json({
                error: error
            })
            return
        }

        const doc = new User({
            email: req.body.email,
            name: req.body.name,
            accessToken: "s",
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

export const login = async (req, res) => {

}