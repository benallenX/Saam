import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export function createGeminiModel() {
  return new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GOOGLE_API_KEY!,
    temperature: 0.5,
    maxOutputTokens: 2048,
    maxRetries: 2,
  });
}

export async function Sample(prompt: string) {
  const model = createGeminiModel();
  
  const res = await model.invoke([
    [
      "human",
      prompt,
    ],
  ]);

  return {
    content: res.content.toString()
  };
}