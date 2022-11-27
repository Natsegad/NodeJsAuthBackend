import {body} from "express-validator"

export const regValidate = [
    body("email","Email not valid").isEmail(),
    body("name","A-z number is not valide").isString(),
    body("password","Password min len 3 max 25").isLength({min:4,max:25})
]