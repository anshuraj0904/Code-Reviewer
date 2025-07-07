import ai_review from "../services/ai.service.js";

const ai_code_review = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(404).json("Code not found!");
  }

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Transfer-Encoding", "chunked");
  // The lines above tell the browser:- “Main tumhe poora data ek saath nahi dunga, main thoda-thoda bhejunga, chunk-by-chunk”.


  try {

    const stream = await ai_review(code);

    for await (const chunk of stream) {
      res.write(chunk.text); // Send chunk by chunk
      // Jitni baar Gemini ek new chunk deta hai, hum res.write() se woh turant frontend ko bhej dete hain.
    }


    res.end();
    // Jab sab chunks mil jaayein, to response band kar dete hain.



  } catch (err) {
    console.error("Error generating AI review:", err);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export default ai_code_review;
