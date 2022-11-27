import User from "../model/user.js"

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

        res.status(200).json(
            {
                success: "ok"
            }
        )
    }catch(e){
        res.status(400).json({
            error: e
        })
    }
}

export const login = async (req, res) => {

}