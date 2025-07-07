import { Router } from "express";
import ai_code_reviewr from "../controllers/ai.controllers.js";

const route = Router()

route.post('/api/get_code_review', ai_code_reviewr)


export default route