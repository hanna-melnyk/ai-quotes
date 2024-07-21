/*views/elements/menuElements.js*/
import { createQuoteElements, getQuote } from './quoteElements.js';

let selectedPerson = 'stoic'; // Default person

export function createMenuElements(inputElement) {
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-items-container';
    menuContainer.className = 'menu-items-container';
    // menuContainer.style.display = 'none'; // Initially hidden


    const menuItems = ['Donald Trump', 'Timothy Snyder', 'Barbie'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.textContent = item;

        menuItem.addEventListener('click', () =>{
            setSelectedPerson(item);

            inputElement.value = item; // Place the selected item into the input field

            hideMenuContainer(menuContainer);
            getQuote({ preventDefault: () => {} }); // Fetch and show the quote for the selected person
        });


        menuContainer.appendChild(menuItem);
    });

    return menuContainer;
}

function hideMenuContainer(menuContainer) {
    menuContainer.classList.remove('open');
    removeTransitionDelays();
}


// Function to add transition delays
export function addTransitionDelays() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.setProperty('--fade-in-delay', `${0.25 + index * 0.05}s`);
    });
}

// Function to remove transition delays
export function removeTransitionDelays() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        item.style.setProperty('--fade-in-delay', '0s');
    });
}
export function setSelectedPerson(person) {
    selectedPerson = person;
}

export function getSelectedPerson() {
    return selectedPerson;
}