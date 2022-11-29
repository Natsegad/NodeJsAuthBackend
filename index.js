import express from "express"
import mongoose from "mongoose";
import {authRouters} from "./routers/auth.js"

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://saer:1377r@cluster0.kmzerty.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Db connected")
}).catch((err)=>{
    console.log("Db not connected ",err)
})

app.use(authRouters)

app.listen(8080)
