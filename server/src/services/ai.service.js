import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const AI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY



const ai = new GoogleGenAI({apiKey:AI_API_KEY});

const ai_review = async(prompt)=> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: JSON.stringify(prompt),
  });
  return response.text;
}


export default ai_review