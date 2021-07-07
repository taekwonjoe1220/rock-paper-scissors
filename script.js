"use strict";

// initial variables
const selections = ["rock", "paper", "scissors"];
let playerSelection, computerSelection, result, score, drawCount;
// from player perspective the game can result in one of the following:
const outcome = ["win", "lose", "draw"];

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
  } else {
    displayResults(outcome[1]);
  }
}
function displayResults(result) {
  if (result === "win") {
    results.textContent = `You ${result}! ${playerSelection} beats ${computerSelection}`;
    score++;
  } else if (result === "lose") {
    results.textContent = `You ${result}! ${computerSelection} beats ${playerSelection}`;
  } else {
    results.textContent = `It's a ${result}! You both chose ${playerSelection}`;
  }
}
// function game() {
//   // initialize game variables
//   playerSelection = "";
//   computerSelection = "";
//   result = "";
//   score = 0;
//   drawCount = 0;

// series of 5 games
// for (let i = 0; i < 5; i++) {
//   playerSelection = prompt("Please choose one: rock, paper, or scissors");
//   computerSelection = computerPlay();
//   playRound(playerSelection, computerSelection);
//   result = playRound(playerSelection, computerSelection);

//   if (result === "win") {
//     console.log(
//       `You ${result}! ${playerSelection} beats ${computerSelection}`
//     );
//     score++;
//   } else if (result === "lose") {
//     console.log(
//       `You ${result}! ${computerSelection} beats ${playerSelection}`
//     );
//   } else {
//     console.log(`It's a ${result}! You both chose ${playerSelection}`);
//     drawCount++;
//   }
// }
// if (score < 3) {
//   console.log(
//     `You lost the best of 5 series ${score} to ${5 - (score + drawCount)}`
//   );
// } else {
//   console.log(
//     `You won the best of 5 series ${score} to ${5 - (score + drawCount)}`
//   );
// }
// }

// game();

// event listen for button click
const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
const results = document.createElement("p");
container.appendChild(results);
buttons.forEach((button) => button.addEventListener("click", playRound));

// assign player value to button id (done in playRound function)
// randomize computer selection (done in playRound function)
// add text to screen with results (bye bye console.log for now...)
