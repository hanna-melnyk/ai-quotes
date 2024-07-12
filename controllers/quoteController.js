// controllers/quoteController.js
const { getFakeStoicQuote } = require('../models/quoteModel');

const generateFakeStoicQuote = async (req, res) => {
    try {
        const quote = await getFakeStoicQuote();
        res.json({ quote });
    } catch (error) {
        res.status(500).send('Error generating quote');
    }
};

module.exports = { generateFakeStoicQuote };