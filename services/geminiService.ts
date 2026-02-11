
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateCompliments(name: string): Promise<string[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 5 very sweet, slightly cheesy, cat-themed romantic compliments for my girlfriend ${name}. 
      Use puns like 'purr-fect', 'meow-tain of love', 'paws-itive'. 
      Return them as a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    return ["You're purr-fect!", "I love you to the moon and back!", "You make my heart melt like butter."];
  } catch (error) {
    console.error("Error generating compliments:", error);
    return ["You're purr-fect!", "You're the whiskers on my kitten!", "I'm feline lucky to have you!"];
  }
}
