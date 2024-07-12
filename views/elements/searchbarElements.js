/*views/elements/searchbarElements.js*/
import {createMenuElements} from './menuElements.js';
import {createButtonElements} from "./quoteElements.js";

export function createSearchbarElements() {
    const searchbarContainer = document.createElement('div');
    searchbarContainer.className = 'searchbar-container';

    const rainbowContainer = document.createElement('div');
    rainbowContainer.id = 'rainbow-border'

    const formContainer = document.createElement('form');
    formContainer.id = 'form-container'

    const inputElement = document.createElement('input');
    inputElement.id = 'search-input';
    inputElement.type = 'text';
    inputElement.placeholder = 'Write your topic or click on a button';


    const buttonElement = createButtonElements();


    // Create menu elements
    const menuContainer = createMenuElements();

    // Function to add transition delays
    function addTransitionDelays() {
        const menuItems = menuContainer.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            item.style.transitionDelay = `${0.25 + index * 0.05}s`;
        });
    }

    // Function to remove transition delays
    function removeTransitionDelays() {
        const menuItems = menuContainer.querySelectorAll('.menu-item');
        menuItems.forEach((item) => {
            item.style.transitionDelay = '0s';
        });
    }

    // Event listener to show menu on input focus/click
    inputElement.addEventListener('focus', () => {
        // menuContainer.style.display = 'block';
        menuContainer.classList.add('open');

        addTransitionDelays();
    });

    // Event listener to show menu on mousedown (to prevent immediate hiding)
    inputElement.addEventListener('mousedown', (event) => {
        event.stopPropagation(); // Prevent document click event from firing
        // menuContainer.style.display = 'block';
        menuContainer.classList.add('open');

        addTransitionDelays();
    });

    // Event listener to hide menu when clicking outside
    document.addEventListener('mousedown', (event) => {
        if (!searchbarContainer.contains(event.target) && !menuContainer.contains(event.target)) {
            // menuContainer.style.display = 'none';
            menuContainer.classList.remove('open');

            removeTransitionDelays();
        }
    });

    formContainer.appendChild(inputElement);
    formContainer.appendChild(buttonElement);

    rainbowContainer.appendChild(formContainer);
    searchbarContainer.appendChild(rainbowContainer);

    searchbarContainer.appendChild(menuContainer);

    document.body.appendChild(searchbarContainer);

}

