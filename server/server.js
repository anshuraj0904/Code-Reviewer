import app from "./src/app.js"
import dotenv from "dotenv"


dotenv.config()


const port = process.env.PORT || 3001
app.get("/", (req,res)=>{
    res.status(200).send("Up and running on ")
})

app.listen(port, ()=>{
    console.log(`Running on ${port}!`);
    
})