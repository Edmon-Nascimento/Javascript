let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;

let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const messageEl = document.querySelector("p#message-el");
const sumEl = document.querySelector("p#sum-el");
const cardsEl = document.querySelector("p#cards-el");
const newCardEl = document.querySelector("button#new-card");
const startGameEl = document.querySelector("button#start-game");
const restartGameEl = document.querySelector("button#restart-game");

startGameEl.classList.add("active");

function startGame() {
  renderGame();
}

function renderGame() {

  startGameEl.classList.remove("active");
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    newCardEl.classList.add("active");
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    restartGameEl.classList.add("active");
    newCardEl.classList.remove("active");
  } else {
    message = "You're out of the game!";
    isAlive = false;
    newCardEl.classList.remove("active");
    restartGameEl.classList.add("active");
  }
  messageEl.textContent = message;
  cardsEl.textContent = `Cards: ${cards.join(" - ")}`;
  sumEl.textContent = `Sum: ${sum}`;
}

function drawNewCard() {
  let newCard = Math.floor(Math.random() * 11) + 1;
  cards.push(newCard);
  sum += newCard
  renderGame();
}

function restartGame() {
  window.location.reload();
}
