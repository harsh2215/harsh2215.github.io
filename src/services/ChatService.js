const TOGETHER_API_ENDPOINT = 'https://api.together.xyz/inference';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI('AIzaSyAJlS-qXD6G4at9BxT6KFB4SXy4ei9GiZY');

const model = genAI.getGenerativeModel({ model: "tunedModels/generate-num-4189" });

const systemPrompt = `You are an AI assistant for this portfolio website. You can help answer questions about:
- Work experience
- Skills and technologies
- Projects
- Education and certifications
Please keep responses concise and professional.`;

export const sendMessage = async (message) => {
    try {
        const response = await model.generateContent([`User: ${message}\nAssistant:`], { maxNumTokens: 512, temperature: 0.7 }
        );

        const data = response.response.text();

        return data.trim();
    } catch (error) {
        console.error('Chat error:', error);
        return 'Sorry, I encountered an error. Please try again.';
    }
};
