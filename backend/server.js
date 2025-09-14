// backend/server.js (FINAL VERSION with response cleaning)

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const port = 3001;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/analyze', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required for analysis.' });
    }
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = `
      Analyze the following text for communication effectiveness. Provide a constructive, non-judgmental analysis.
      The text is: "${text}"

      IMPORTANT: Return your analysis ONLY as a raw JSON object (do not wrap it in markdown or any other text) with the following structure:
      {
        "clarityScore": [A score from 0 to 100 on how clear and easy to understand the text is],
        "positiveFeedback": [A short sentence highlighting one thing that was done well],
        "improvementSuggestion": [A single, actionable suggestion for improvement]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = response.text();

    // --- THIS IS THE FIX ---
    // The AI wraps the JSON in a markdown block (```json ... ```). 
    // We will extract just the JSON part from the raw text.
    const startIndex = rawText.indexOf('{');
    const endIndex = rawText.lastIndexOf('}');
    const jsonString = rawText.substring(startIndex, endIndex + 1);
    // ----------------------

    const analysisResult = JSON.parse(jsonString);
    res.json(analysisResult);

  } catch (error) {
    console.error('Error with Gemini API:', error);
    res.status(500).json({ error: 'Failed to analyze text.' });
  }
});

app.listen(port, () => {
  console.log(`CommunicateAI backend (Gemini) listening at http://localhost:${port}`);
});