/*views/elements/quoteElements.js*/
import {getSelectedPerson} from "./menuElements.js";

export function createQuoteElements() {

    const quoteElement = document.createElement('div');
    quoteElement.className = 'div-container text'
    quoteElement.id = 'quote';



    document.body.appendChild(quoteElement);
}

// Function to remove quote container if it exists
export function removeQuoteElements() {
    const quoteContainer = document.getElementById('quote');
    if (quoteContainer) {
        quoteContainer.remove();
    }
}

export function createButtonElements() {
    const button = document.createElement('button');
    button.innerHTML = 'Generate Quote ✨';
    // button.onclick = getQuote;
    button.type = 'submit';

    return button;
}

export function scrollToSearchbar() {
    document.querySelector('.searchbar-container').scrollIntoView({ behavior: 'smooth' });
}


export async function getQuote(event) {
    event.preventDefault();  // Prevent form submission


    // Create the quote container if it doesn't exist
    let quoteContainer = document.getElementById('quote');
    if (!quoteContainer) {
        createQuoteElements();
        quoteContainer = document.getElementById('quote');
    }

    const person = getSelectedPerson();

    try {
        const response = await fetch('/api/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ person }), // Send the person's name in the request body
        });
        const data = await response.json();
        if (response.ok) {
            quoteContainer.innerText = data.quote;
            scrollToSearchbar();
        } else {
            quoteContainer.innerText = 'Error: ' + data.error;
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteContainer.innerText = 'Error fetching quote. Please try again later.';
    }
}