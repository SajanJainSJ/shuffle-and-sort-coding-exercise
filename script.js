var numberedListElement = document.getElementById("numbered-cards");

function shuffleCards() {
  let numberedList = numberedListElement.children;
  for (i = 0; i < numberedList.length; i++) {
    randomIndex = Math.floor(i * Math.random());
    numberedListElement.appendChild(numberedList[randomIndex]);
  }
}

function sortCards() {
  let numberedList = numberedListElement.children;
  let numberedElementNodes = [];
  for (i in numberedList) {
    if (numberedList[i].nodeType == 1) {
      // get rid of the whitespace text nodes
      numberedElementNodes.push(numberedList[i]);
    }
  }
  numberedElementNodes.sort((a, b) => {
    return a.innerHTML - b.innerHTML;
  });
  for (i = 0; i < numberedElementNodes.length; i++) {
    numberedListElement.appendChild(numberedElementNodes[i]);
  }
}
