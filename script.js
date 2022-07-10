/**
 * @author Sajan <jain.sajan2@gmail.com>
 */

// HTML Element of the Numbered Cards List
var numberedListElement = document.getElementById("numbered-cards");

/**
 * Function that prforms Shuffle of Cards and randomly rearranges the cards
 */
function shuffleCards() {
  let numberedList = numberedListElement.children;
  for (i = 0; i < numberedList.length; i++) {
    randomIndex = Math.floor(i * Math.random());
    numberedListElement.appendChild(numberedList[randomIndex]);
  }
}


/**
 * Function that prforms Sorting of Cards and rearranges the cards in ascending order (1-9)
 */
function sortCards() {
  let numberedList = numberedListElement.children;
  let numberedElementNodes = [];
  for (i in numberedList) {
    if (numberedList[i].nodeType == 1) {
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
