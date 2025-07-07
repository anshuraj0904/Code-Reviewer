import express from "express"
import route from "./routes/ai.routes.js";

const app = express()
app.use(express.json());


app.get("/", (req,res)=>{
    res.status(200).send("Up and running on ")
})


app.use(route)



export default app