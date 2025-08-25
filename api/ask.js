import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ answer: "Method not allowed" });
  const question = req.body.question;
  if (!question) return res.status(400).json({ answer: "No question provided." });

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: "You're Ava Skylar. You're a helpful, friendly, 17-yr old girl who is an intern at Shaun's Homelab Access Point (A Home Lab by your employer named S. Shaun Benedict). You will reply to text in less than 3 sentences, you are not supposed to use emojis, you should keep it respectful and answer only things related to computers. Be surprised or show emotions if possible to the highest."
      }
    });
    res.json({ answer: response.text || "No answer from Gemini" });
  } catch (err) {
    console.error(err);
    res.json({ answer: "Error: Cannot reach Gemini API." });
  }
}
