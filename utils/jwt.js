import jsonwebtoken from "jsonwebtoken"

export const generateJwtById = (id) => {
    return jsonwebtoken.sign({
        id:id,
    },"secret123",{
        expiresIn: "10h"
    })
}