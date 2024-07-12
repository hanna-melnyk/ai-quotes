/*views/elements/quoteElements.js*/
export function createQuoteElements() {
    const quoteContainer = document.createElement('div');
    quoteContainer.id = 'quote';
    quoteContainer.className = 'div-container text'
    quoteContainer.textContent = 'Click the button to generate a quote.';



    document.body.appendChild(quoteContainer);
}

export function createButtonElements() {
    const button = document.createElement('button');
    button.innerHTML = 'Generate Quote ✨';
    button.onclick = getQuote;

    return button;
}


export async function getQuote(event) {
    event.preventDefault();  // Prevent form submission


    // Create the quote container if it doesn't exist
    let quoteContainer = document.getElementById('quote');
    if (!quoteContainer) {
        createQuoteElements();
        quoteContainer = document.getElementById('quote');
    }


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
        } else {
            quoteContainer.innerText = 'Error: ' + data.error;
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteContainer.innerText = 'Error fetching quote. Please try again later.';
    }
}