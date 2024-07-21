export function createGridElements() {
    // Create a container for the entire app
    const appContainer = document.createElement('div');
    appContainer.className = 'app-container';

    // Create a container for text elements, searchbar, and menu
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';

    // Create a container for the quotes
    const quoteContainer = document.createElement('div');
    quoteContainer.className = 'quote-container';
    quoteContainer.id = 'quote-container';

    // Append the containers to the app container
    appContainer.appendChild(mainContainer);
    appContainer.appendChild(quoteContainer);

    // Append the app container to the body
    document.body.appendChild(appContainer);

    return { mainContainer, quoteContainer };
}