import { Router } from "express";
import ai_code_review from "../controllers/ai.controllers.js";
import review_limitter from "../middlewares/ratelimitter.middlewares.js";


const route = Router()

route.post('/api/get_code_review', review_limitter, ai_code_review)


export default route