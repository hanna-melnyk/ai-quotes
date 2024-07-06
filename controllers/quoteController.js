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



const convertData = (data) => {
    const { results } = data;
    let cats = [];
    let dogs = [];


    results.forEach((result) => {
        if (result.type === "cat") {
            const catList = document.getElementById("catlist");
            const cat = document.createElement("li");
            cat.innerText = result.name;
            catList.appendChild(cat);
            cats.push(result);
        } else {
            const dogList = document.getElementById("doglist");
            const dog = document.createElement("li");
            dog.innerText = result.name;
            dogList.appendChild(dog);
            dogs.push(result);
        }
    });


    return {
        cats,
        dogs,
    };
};