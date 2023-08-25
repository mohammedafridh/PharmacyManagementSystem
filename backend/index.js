import mongoose from "mongoose";
import express from 'express'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())

dotenv.config()

mongoose.connect(process.env.DB, {
    useNewUrlParser:true
})
.then(()=>app.listen(process.env.PORT, ()=>console.log(`Listening at ${process.env.PORT}`)))
.catch((err)=>console.log(err))