/*views/elements/menuElements.js*/

export function createMenuElements() {
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-items-container';
    menuContainer.className = 'menu-items-container';
    // menuContainer.style.display = 'none'; // Initially hidden


    const menuItems = ['dao', 'Simone de Beauvoir', 'Donald Trump', 'Timothy Snyder', 'Barbie', 'Bertrand Russell', 'comedian Judy Carter'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.textContent = item;
        menuContainer.appendChild(menuItem);
    });

    return menuContainer;
}