import express from "express";
import { checkLogin } from "../controller/authController";


const router = express.Router();


router.post("/checkLogin", checkLogin)


export default router;