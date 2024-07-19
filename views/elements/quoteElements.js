export function createQuoteElements ()  {
  const quoteContainer = document.createElement("textarea");
  quoteContainer.id = "quote";
  quoteContainer.className = "div-container text";
  quoteContainer.readOnly = true; 
  quoteContainer.textContent = "Click the button to generate a quote.";

  const button = document.createElement("button");
  button.innerHTML = "Generate Quote ✨";
  button.onclick = getQuote;

  document.body.appendChild(quoteContainer);
  document.body.appendChild(button);
};

async function getQuote() {
  try {
    let element = document.getElementById("thin-text");
    element.style.transition = "all 1s ease";
    element.style.opacity = "0";
    setTimeout(function () {
      if (element.style.opacity === "0") {
        element.style.display = "none";
    }
}, 1000);
const response = await fetch("/api/quote");
const data = await response.json();

    if (response.ok) {
      document.getElementById("quote").innerText = data.quote;
    } else {
      document.getElementById("quote").innerText = "Error: " + data.error;
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("quote").innerText =
      "Error fetching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please trching quote. Please try again later.";
  }
}
