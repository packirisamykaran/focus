import express from "express";
import { saveTiming } from "../controller/timerController";
// import {} from "../controller/timerController";


const router = express.Router();


router.post("/saveTiming", saveTiming);


export default router;