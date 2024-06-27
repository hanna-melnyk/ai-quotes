export function createHeadingElements() {
    const headingContainer = document.createElement('div');
    headingContainer.className = 'div-container text';
    headingContainer.id = 'heading';
    headingContainer.innerHTML = '<h1>Where <span class="green-font">ideas and AI</span> come together.</h1>';

    document.body.appendChild(headingContainer);
}

export function createTextElements() {
    const textContainer = document.createElement('div');
    textContainer.className = 'div-container text';
    textContainer.id = 'thin-text';
    textContainer.textContent = 'Get inspired by machine generated stoic-like quotes';

    document.body.appendChild(textContainer);
}