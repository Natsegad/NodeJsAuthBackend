import {body} from "express-validator"
import jsonwebtoken from "jsonwebtoken";

export const regValidate = [
    body("email", "Email not valid").isEmail(),
    body("name", "A-z number is not valide").isString(),
    body("password", "Password min len 3 max 25").isLength({min: 4, max: 25})
]

export const loginValidate = [
    body("email", "Email not valid").isEmail(),
    body("password", "Password min len 3 max 25").isLength({min: 4, max: 25})
]

export const checkAuth = (req, res, next) => {
    try {
        let token = req.headers["x-access-token"] || req.headers["authorization"]
        if(!token){
            res.status(404).json({
                error:"Token not found"
            })
            return
        }
        token = token.replace(/^Bearer\s+/, "");
        jsonwebtoken.verify(token,'secret123',0,(err,decoded)=>{
            if(err){
                res.status(404).json({
                    error:"Token not valid"
                })
                return
            }
            if(decoded.id == req.body.id){
                next()
                return
            }
            else {
                res.status(401).json({
                        err: "Not Auth user"
                    }
                )
            }
        })
    } catch (e) {
        res.status(400).json({
            error: e
        })
        console.log(e)
    }
}