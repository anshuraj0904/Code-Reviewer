import express from "express"
import ai_review from "./services/ai.service.js"

const app = express()
app.use(express.json());


app.get("/", (req,res)=>{
    res.status(200).send("Up and running on ")
})


app.post("/get_review", async(req,res)=>{
    const {prompt} = req.body

    // console.log(prompt);
    
    if(prompt){
        
        const data = await ai_review(prompt)
        
        if(data){
            return res.status(200).send(data)
        }
        else{
            return res.status(404).send("Working on it!")
        }
        
    }

    res.status(404).send("Something Went wrong!")
})

export default app