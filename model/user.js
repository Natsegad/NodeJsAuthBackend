import mongoose from "mongoose"

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        required: true
    }
})

export default mongoose.model('user',user)