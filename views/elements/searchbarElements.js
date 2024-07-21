/*views/elements/searchbarElements.js*/
import { createMenuElements, addTransitionDelays, removeTransitionDelays, getSelectedPerson, setSelectedPerson } from './menuElements.js';
import {createButtonElements, removeQuoteElements, getQuote } from "./quoteElements.js";

export function createSearchbarElements() {
    const searchbarContainer = document.createElement('div');
    searchbarContainer.className = 'div-container searchbar-container';

    const rainbowContainer = document.createElement('div');
    rainbowContainer.id = 'rainbow-border'

    const formContainer = document.createElement('form');
    formContainer.id = 'form-container'

    const inputElement = document.createElement('input');
    inputElement.id = 'search-input';
    inputElement.type = 'text';
    inputElement.placeholder = 'Write your topic or persona...';


    const buttonElement = createButtonElements();


    // Create menu elements
    const menuContainer = createMenuElements(inputElement);


    let shouldSelectText = true;


    // Event listener to show menu on input focus/click
    inputElement.addEventListener('focus', () => {
        // menuContainer.style.display = 'block';
        menuContainer.classList.add('open');

        if (shouldSelectText) {
            setTimeout(() => inputElement.select(), 0); // Select the text inside the input field
        }

        addTransitionDelays();
        removeQuoteElements(); // Remove quote container if it exists
    });

    // Event listener to handle mousedown to allow cursor placement anywhere in the text
    inputElement.addEventListener('mousedown', (event) => {
        if (shouldSelectText) {
            event.preventDefault(); // Prevent default behavior to ensure text selection works
            inputElement.focus(); // Ensure the input gets focus
            setTimeout(() => inputElement.select(), 0); // Select the text inside the input field
            shouldSelectText = false; // Next click will allow normal behavior
        }
    });

    // Event listener to show menu on mousedown (to prevent immediate hiding)
    // inputElement.addEventListener('mousedown', (event) => {
    //     event.stopPropagation(); // Prevent document click event from firing
    //     // menuContainer.style.display = 'block';
    //
    //     event.preventDefault(); // Prevent default behavior to ensure text selection works
    //     inputElement.focus(); // Ensure the input gets focus
    //     setTimeout(() => inputElement.select(), 0); // Select the text inside the input field
    //
    //     menuContainer.classList.add('open');
    //
    //     addTransitionDelays();
    //     removeQuoteElements(); // Remove quote container if it exists
    // });

    // Event listener to hide menu when clicking outside
    document.addEventListener('mousedown', (event) => {
        if (!searchbarContainer.contains(event.target) && !menuContainer.contains(event.target)) {
            // menuContainer.style.display = 'none';
            menuContainer.classList.remove('open');

            removeTransitionDelays();
            shouldSelectText = true; // Reset the flag to select text on next input click
        }
    });

    // Event listener to handle form submission based on input text
    formContainer.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        const query = inputElement.value.trim();
        if (query) {
            setSelectedPerson(query); // Set the query as the selected person/topic
            getQuote(event); // Fetch and show the quote
        }

        shouldSelectText = true; // Reset the flag to select text on next input click
    });

    formContainer.appendChild(inputElement);
    formContainer.appendChild(buttonElement);
    rainbowContainer.appendChild(formContainer);
    searchbarContainer.appendChild(rainbowContainer);
    searchbarContainer.appendChild(menuContainer);

    document.body.appendChild(searchbarContainer);

}

