import ai_review from "../services/ai.service.js";

const ai_code_review = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(404).json("Code not found!");
  }
  try {

    const data = await ai_review(code);

    if (!data) {
      return res.status(404).json("Something Went Wrong!");
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("Error generating AI review:", err);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export default ai_code_review;
