"use strict";
// event listeners / updaters for button click
const playButtons = document.querySelectorAll("#rock, #paper, #scissors");
const reset = document.querySelector("#reset");
const container = document.querySelector(".container");
const results = document.createElement("p");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");
container.appendChild(results);

// initial variables for game
const selections = ["rock", "paper", "scissors"];
const outcome = ["win", "lose", "draw"];
let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;

// plays the game
playButtons.forEach((button) => button.addEventListener("click", playRound));

// remove event handler at end of game
function removeHandler() {
  playButtons.forEach((button) =>
    button.removeEventListener("click", playRound)
  );
}

// resets the game
reset.addEventListener("click", resetGame);

// randomly choose between rock, paper, and scissors for computer
function computerPlay() {
  return selections[Math.floor(Math.random() * 3)];
}

// round of play between player & computer
function playRound() {
  // determine winner
  computerSelection = computerPlay();
  playerSelection = this.id;

  // draw if both selections are the same
  if (playerSelection === computerSelection) {
    displayResults(outcome[2]);
  } else if (
    // rock beats scissors, paper beats rock, scissors beats paper => player wins
    (playerSelection === selections[0] &&
      computerSelection === selections[2]) ||
    (playerSelection === selections[1] &&
      computerSelection === selections[0]) ||
    (playerSelection === selections[2] && computerSelection === selections[1])
  ) {
    displayResults(outcome[0]);
    playerScore++;
    updateScores();
  } else {
    displayResults(outcome[1]);
    computerScore++;
    updateScores();
  }
  if (playerScore === 5 || computerScore === 5) {
    // disable play buttons (force user to reset);
    removeHandler();
    // display winner (first to 5)
  }
}
function displayResults(result) {
  if (result === "win") {
    results.textContent = `You ${result}! ${playerSelection} beats ${computerSelection}`;
  } else if (result === "lose") {
    results.textContent = `You ${result}! ${computerSelection} beats ${playerSelection}`;
  } else {
    results.textContent = `It's a ${result}! You both chose ${playerSelection}`;
  }
}

function updateScores() {
  playerScoreDiv.textContent = `Player Score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  results.textContent = "";
  playButtons.forEach((button) => button.addEventListener("click", playRound));
}
