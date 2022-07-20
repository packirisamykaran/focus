import express from "express";
import { insertUpdateContent, getAllFixedContent } from "../controller/fixedContentController";


const router = express.Router();


router.post("/update", insertUpdateContent);
router.post("/getAll", getAllFixedContent)


export default router;