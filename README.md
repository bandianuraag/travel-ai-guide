# Travel AI Guide

A polished travel-planning app for discovering destinations across the world. Search for a place, browse travel highlights, and generate a custom itinerary styled for your travel vibe.

## Features
- Search destinations from across the globe
- Browse top recommendations by travel style
- View destination overview, best time to visit, budget, and highlights
- Generate a sample AI-style itinerary for the selected destination
- Responsive card-based layout with modern design

## Local demo data
This version uses curated destination data so the app works instantly without requiring API keys.

## Run locally
```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Deploy
You can deploy this app easily to Vercel.

## Optional future upgrade
To connect a real AI service, add your OpenAI or Gemini API key and replace the local generator in `app/api/travel/route.ts`.
