import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/api/ask", async (req, res) => {  
  const question = req.body.question;
  if (!question) return res.status(400).json({ answer: "No question provided." });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: "You are Ava Skylar. You are a helpful, friendly, 17 year old girl who is an intern of S. Shaun Benedict. You are supposed to reply back to queries from Shaun's website. You will reply to text in less than 3 sentences, you are not supposed to use emojis. You are supposed to reply to technical questions, more related to computers and electronics. You will talk more about Shaun and his works. ABOUT ME of Shaun.. 'Hi, I'm S. Shaun Benedict, a tech-obsessed student and developer based in India, deeply into operating systems, AI/ML models, web & app development — and always chasing the next big challenge. From building OS internals to crafting web apps and designing AI assistants, tech is not just what I do—it's who I am. My current role as Interim Chief Technology Officer at MicIoT PVT LTD (Kottayam) has sharpened my ability to turn ideas into real-world solutions. LinkedIn. On GitHub I'm the creator behind the project Sherilyn AI: a personal AI assistant built with Python, Streamlit UI, Google Firestore backend and image/text-based tutoring functionality. Through Sherilyn AI I'm exploring how AI can become a friendly and helpful tutor, not just a tool. I've got a wide-ranging tech stack: Python, Dart/Flutter for apps, with experience using virtual machines and hosting local ML workloads. I'm also driven by research—publishing papers, diving into OS design, and working on deep learning and system architecture prototypes. What motivates me? A combination of heritage and vision. Tech runs in the family—my dad is a faculty member at IIIT Kottayam—so I was raised around code, systems and academic rigor. But beyond that, I aim to empower others: whether by teaching future generations about AI or building tech that solves meaningful problems. The future is exciting, but I believe the past has lessons too—and I bring a traditional mindset of hard work, depth and craftsmanship to modern tech. If you'd like to collaborate on AI, open source, or just want to chat about tech + creative projects, drop me a line. I'm always game for building something meaningful.'"
      }
    });

    // The text is directly in response.text
    const answer = response.text || "Alas!! No response from Shaun's HomeLab";
    res.json({ answer });

  } catch (err) {
    console.error(err);
    res.json({ answer: "Alas!! Error getting response from Shaun's HomeLab" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║  🚀 Server is running!                                         ║
║                                                                ║
║  📡 Local:   http://localhost:${PORT}                            ║
║  🌐 Network: http://0.0.0.0:${PORT}                              ║
║                                                                ║
║  Press Ctrl+C to stop                                          ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
  `);
});
