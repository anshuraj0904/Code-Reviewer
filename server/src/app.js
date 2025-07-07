import express from "express"
import cors from "cors"
import route from "./routes/ai.routes.js";


const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

app.get("/", (req,res)=>{
    res.status(200).send("Up and running on ")
})


app.use(route)



export default app