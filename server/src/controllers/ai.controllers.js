import ai_review from "../services/ai.service.js";

const ai_code_reviewr = async (req, res) => {
  const { code } = req.body;

  try {
    if (!code) {
      return res.status(404).send("Code not found!");
    }

    const data = await ai_review(code);

    if (!data) {
      return res.status(404).send("Something Went Wrong!");
    }

    res.status(200).send(data);
  } catch (err) {
    console.error("Error generating AI review:", err);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export default ai_code_reviewr;
