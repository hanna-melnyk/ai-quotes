// models/quoteModel.js
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const getFakeQuote = async () => {
    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'system', content: 'Generate a fake stoic quote that sounds like a real one.' }],
        });
        return completion.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error generating completion:', error.response ? error.response.data : error.message);
        throw error;
    }
};


