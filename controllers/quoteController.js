// controllers/quoteController.js
import { getFakeQuote } from '../models/quoteModel.js';

export const generateFakeQuote = async (req, res) => {
    try {
        const quote = await getFakeQuote();
        res.json({ quote });
    } catch (error) {
        res.status(500).send('Error generating quote');
    }
};
