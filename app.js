// app.js
import express from 'express';
import dotenv from 'dotenv';
import {generateFakeQuote} from "./controllers/quoteController.js";

dotenv.config();
const router = express.Router();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('views'));

router.post('/quote', generateFakeQuote);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
