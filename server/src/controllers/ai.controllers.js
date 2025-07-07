import ai_review from "../services/ai.service.js";



const ai_review_controller = async(req,res)=>{
    const {prompt} = req.body

    // console.log(prompt);
    
    if(!prompt)
    {
        return res.status(404).send("Prompt not found!")
    }

    const data = await ai_review(prompt)

    if(!data)
    {
        return res.status(404).send("Something Went Wrong!") 
    }
    
    // console.log(`From the controller: ${data}`);
    

    res.status(200).send(data)
}


export default ai_review_controller