// views/scripts.js
import { createQuoteElements } from './elements/quoteElements.js';
import {createHeadingElements, createTextElements} from "./elements/textElements.js";

function loadApp() {
    createHeadingElements();
    createTextElements();
    createQuoteElements();
}

window.addEventListener('load', loadApp);