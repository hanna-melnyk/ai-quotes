// views/scripts.js
import { createQuoteElements } from './elements/quoteElements.js';
import { createHeadingElements, createTextElements } from "./elements/textElements.js";
import { createSearchbarElements } from "./elements/searchbarElements.js";

function loadApp() {
    createHeadingElements();
    createTextElements();
    createSearchbarElements();
}

window.addEventListener('load', loadApp);