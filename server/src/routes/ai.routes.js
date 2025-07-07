import { Router } from "express";
import ai_review_controller from "../controllers/ai.controllers.js";

const route = Router()

route.post('/api/get_code_review', ai_review_controller)


export default route