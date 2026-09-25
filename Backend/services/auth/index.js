import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
dotenv.config();
const port = process.env.PORT || 8001

const app = express();

app.get("/" ,(req , res)=>{
    res.json({message:"Auth Service is running"})
})

app.listen(port ,()=>{
    console.log(`Auth Service Started at port ${port}`);
    connectDb();
})