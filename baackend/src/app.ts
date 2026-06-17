import express from 'express';
import dotenv from 'dotenv';
import {router as authRouter} from './authentication/auth.router'
import cors from 'cors';
dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json())

app.get('/health',(_req,res)=>{
    const date=new Date();
    res.json({message:`Health ${date.toISOString()}`})
})

app.use('/api/auth',authRouter);