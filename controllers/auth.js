import User from "../model/user.js"
import {generateJwtById} from "../utils/jwt.js"

export const register = async (req, res) => {
    try {
        const doc = new User({
            email: req.body.email,
            name: req.body.name,
            accessToken: "s",
            passwordHash: "s",
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