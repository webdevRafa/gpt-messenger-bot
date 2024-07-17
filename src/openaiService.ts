const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

interface OpenAIResponseChoice {
  text: string;
}

interface OpenAIResponse {
  choices: OpenAIResponseChoice[];
}

export const getGPTResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
    });

    const data: OpenAIResponse = response.data as OpenAIResponse;

    return data.choices[0].text.trim();
  } catch (error) {
    console.error("Error getting GPT response:", error);
    throw error;
  }
};