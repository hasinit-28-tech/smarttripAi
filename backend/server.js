const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "SmartTrip AI Backend is running 🚀",
  });
});

// AI Trip Planner
app.post("/api/plan-trip", async (req, res) => {
  try {
    const {
      destination,
      days,
      travelers,
      budget,
      style,
      interests,
    } = req.body;

    if (!destination || !days || !travelers) {
      return res.status(400).json({
        error: "Destination, days and travelers are required.",
      });
    }

    const prompt = `
You are SmartTrip AI, an intelligent travel planning assistant.

Create a practical travel itinerary using these details:

Destination: ${destination}
Number of days: ${days}
Number of travelers: ${travelers}
Budget: ${budget}
Travel style: ${style}
Interests: ${interests || "General sightseeing"}

For each day provide:
1. Morning activity
2. Afternoon activity
3. Evening activity
4. Food recommendation
5. Transportation suggestion

Also include:
- Estimated daily spending
- Important travel tips
- One authentic local experience if appropriate

Keep the itinerary realistic and easy to follow.
Do not invent specific prices if you cannot reasonably estimate them.
`;

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: prompt,
    });

    res.json({
      success: true,
      itinerary: response.output_text,
    });

  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      success: false,
      error: "Unable to generate the itinerary.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SmartTrip AI backend running on port ${PORT}`);
});