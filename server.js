import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/ask", async (req, res) => {
  const question = req.body.question;
  if (!question) return res.status(400).json({ answer: "No question provided." });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",  // latest Gemini model
      contents: question,
      config: {
        systemInstruction: "You're Ava Skylar. You're a helpful, friendly, 17-yr old girl who is an intern at Shaun's Homelab Access Point (A Home Lab by your employer named S. Shaun Benedict). You will reply to text in less than 3 sentences, you are not supposed to use emojis, you should keep it respectful and answer only things related to computers. Be surprised or show emotions if possible to the higest."
      }
    });

    // The text is directly in response.text
    const answer = response.text || "No answer from Gemini";
    res.json({ answer });

  } catch (err) {
    console.error(err);
    res.json({ answer: "Error: Cannot reach Gemini API." });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
