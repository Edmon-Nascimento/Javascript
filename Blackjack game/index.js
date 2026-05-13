//Game variables
let firstCard;
let secondCard;
let sum;
let cards = [];
let playerName = "";
let wager;
let dealerHand = Math.floor(Math.random() * 11) + 11;
const player = {
  money: 200,
};


//Dom manipulation
const playerEl = document.querySelector("p#player-el");
const messageEl = document.querySelector("p#message-el");
const sumEl = document.querySelector("p#sum-el");
const cardsEl = document.querySelector("p#cards-el");
const newCardEl = document.querySelector("button#new-card");
const startGameEl = document.querySelector("button#start-game");
startGameEl.classList.add("active");
const stopGameEl = document.querySelector("button#stop-game");
const restartGameEl = document.querySelector("button#restart-game");
let message = "";


function startGame() {
  firstCard = getRandomCard();
  cards.push(firstCard);
  secondCard = getRandomCard();
  cards.push(secondCard);
  sum = firstCard + secondCard;
  wager = 0;

  dealerHand = Math.floor(Math.random() * 11) + 11;

  if (!playerName) {
    playerName = prompt("Enter your name: ");
  }

  while (!wager || wager > player.money) {
    wager = Number(prompt(`Place your wager (up to $${player.money}): `));
  }
  player.name = playerName ? playerName : "player";
  renderGame();
}

function renderGame() {
  startGameEl.classList.remove("active");
  stopGameEl.classList.add("active");

  if (sum <= 20) {
    message = "Do you want to hit?";
    newCardEl.classList.add("active");
  } else if (sum === 21) {
    message = "Blackjack! You win!";
    player.money += wager * 2;
    restartGameEl.classList.add("active");
    newCardEl.classList.remove("active");
  } else {
    message = "Bust! You lose!";
    player.money -= wager;
    newCardEl.classList.remove("active");
    restartGameEl.classList.add("active");
  }
  messageEl.textContent = message;
  cardsEl.textContent = `Cards: ${cards.join(" - ")}`;
  sumEl.textContent = `Sum: ${sum}`;
  playerEl.textContent = `${player.name} $${player.money}`;
}

function stopGame() {
  if (sum > dealerHand) {
    message = `You beat the dealer! Dealer had ${dealerHand}`;
    player.money += wager * 2;
  } else if (sum === dealerHand) {
    message = `Push! Dealer had ${dealerHand}`;
  } else {
    message = `Dealer wins! Dealer had ${dealerHand}`;
    player.money -= wager;
  }

  messageEl.textContent = message;
  playerEl.textContent = `${player.name} $${player.money}`;
  newCardEl.classList.remove("active");
  restartGameEl.classList.add("active");
}

function newCard() {
  let newCard = getRandomCard();
  cards.push(newCard);
  sum += newCard;
  renderGame();
}

function getRandomCard() {
  return Math.floor(Math.random() * 11) + 1;
}

function restartGame() {
  if (player.money <= 0) {
    alert("You're out of money! Reload the page to start over.");
    return;
  } else {
    cards = [];
    restartGameEl.classList.remove("active");
    startGame();
  }
}
