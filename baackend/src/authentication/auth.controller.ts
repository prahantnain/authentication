import { authService } from "./auth.service";
import type { Request,Response } from "express";

export const CreateUser = async (req:Request,res:Response) =>{
    const user = await authService.createUser(req.body)
    res.status(200).json({message:"User created"});
} 

export const Login = async (req:Request,res:Response) =>{
    const user = await authService.login(req.body.username,req.body.password)
    res.status(200).json({message:user});
} 
