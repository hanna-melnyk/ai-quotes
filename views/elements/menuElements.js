/*views/elements/menuElements.js*/

export function createMenuElements() {
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-items-container';
    menuContainer.className = 'menu-items-container';
    // menuContainer.style.display = 'none'; // Initially hidden


    const menuItems = ['Donald Trump', 'Timothy Snyder', 'Barbie'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.textContent = item;

        menuItem.addEventListener('click', () => getQuoteByPerson(item));


        menuContainer.appendChild(menuItem);
    });

    return menuContainer;
}