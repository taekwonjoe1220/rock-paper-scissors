"use strict";

// initial variables
const selections = ["rock", "paper", "scissors"];
// from player perspective the game can result in one of the following:
const outcome = ["win", "lose", "draw"];
let playerSelection = prompt("Please choose one: rock, paper, or scissors");
const computerSelection = computerPlay();

// randomly choose between rock, paper, and scissors for computer
function computerPlay() {
  return selections[Math.floor(Math.random() * 3)];
}

// round of play between player & computer
function playRound(playerSelection, computerSelection) {
  // determine winner
  if (playerSelection === computerSelection) {
    return outcome[2];
  } else if (
    (playerSelection === selections[0] &&
      computerSelection === selections[2]) ||
    (playerSelection === selections[1] &&
      computerSelection === selections[0]) ||
    (playerSelection === selections[2] && computerSelection === selections[1])
  ) {
    return outcome[0];
  } else {
    return outcome[1];
  }
}

const result = playRound(playerSelection, computerSelection);
if (result === "win") {
  console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`);
} else if (result === "lose") {
  console.log(`You ${result}! ${computerSelection} beats ${playerSelection}`);
} else {
  console.log(`It's a ${result}! You both chose ${playerSelection}`);
}
