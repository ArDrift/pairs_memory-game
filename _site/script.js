const cardContainer = document.getElementById("card-container");
const cardTitle = document.getElementById("cardTitle");
const cardValue = document.getElementById("cardValue");
const restartBtn = document.getElementById("restart");
const cards = document.getElementsByClassName("card");
let deckSize = 0;
let selectedCards = 0;
let firstVal;
let secondVal;
const cardsData = getCardsData();

function pickCard() {
  if (selectedCards === 0) {
    selectedCards += 1;
    let firstVal = document.getElementsByClassName("show-value");
  }
  else if (selectedCards === 1) {
    let secondVal = document.getElementsByClassName("show-value");
    checkMatch();
  }
}

function checkMatch() {
  if (firstVal === secondVal) {
    addPoint();
    resetFlip();
  }
}

function addPoint() {

}

function resetFlip() {

}

function setDeckSize() {
  if (deckSize === 0) {
    deckSize = document.getElementById("deck-size").value;
    for(let i = 0; i < deckSize; i++) {
      cards[i].className = "card active";
    }
  }
  else {
    alert("Deck size already set!");
  }
}

function setCardsData(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
  window.location.reload();
}

function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}

// Restart game button
restartBtn.addEventListener('click', () => {
  localStorage.clear();
  cardContainer.innerHTML = '';
  window.location.reload();
});
