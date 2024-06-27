// app.js
const express = require('express');
const dotenv = require('dotenv');
const { generateFakeStoicQuote } = require('./controllers/quoteController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('views'));

app.get('/api/quote', generateFakeStoicQuote);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
