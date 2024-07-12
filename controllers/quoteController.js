// controllers/quoteController.js
import { getFakeQuote } from '../models/quoteModel.js';

export const generateFakeQuote = async (req, res) => {
    const { person } = req.body;
    try {
        const quote = await getFakeQuote(person || 'stoic');
        res.json({ quote });
    } catch (error) {
        res.status(500).send('Error generating quote');
    }
};
