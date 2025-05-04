import express from 'express'
import { sendPrompt } from '../controller/prompt.controller.js';
import userMiddleware from '../middleware/promt.middleware.js';


const router =express.Router()
router.post("/prompt",userMiddleware, sendPrompt);
export default router;