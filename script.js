import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/analyze", async (req, res) => {
  const { comment } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are an AI comment safety moderator.
Classify comments into:
- SAFE
- WARNING
- DANGEROUS

Also give short reason.
Return in JSON format:
{
  "label": "...",
  "reason": "..."
}
`
        },
        {
          role: "user",
          content: comment
        }
      ]
    });

    res.json({
      result: response.choices[0].message.content
    });

  } catch (err) {
    res.status(500).json({ error: "AI server error" });
  }
});

app.listen(5000, () => {
  console.log("SafeGram AI running on port 5000");
});