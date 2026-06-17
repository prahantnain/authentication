import { Router } from "express";
import { CreateUser,Login } from "./auth.controller";
export const router=Router();

router.post('/signup',CreateUser);
router.post('/login',Login);