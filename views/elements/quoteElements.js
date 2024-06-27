/*views/elements/quoteElements.js*/
export function createQuoteElements() {
    const quoteContainer = document.createElement('div');
    quoteContainer.id = 'quote';
    quoteContainer.className = 'div-container text'
    quoteContainer.textContent = 'Click the button to generate a quote.';

    const button = document.createElement('button');
    button.innerHTML = 'Generate Quote ✨';
    button.onclick = getQuote;

    document.body.appendChild(quoteContainer);
    document.body.appendChild(button);
}

async function getQuote() {
    try {
        const response = await fetch('/api/quote');
        const data = await response.json();
        if (response.ok) {
            document.getElementById('quote').innerText = data.quote;
        } else {
            document.getElementById('quote').innerText = 'Error: ' + data.error;
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').innerText = 'Error fetching quote. Please try again later.';
    }
}