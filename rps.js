"use strict";

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  switch (String(humanChoice).toUpperCase()) {
    case "ROCK":
      if (computerChoice === "ROCK") {
        computerScore++;
        log("DRAW");
      } else if (computerChoice === "PAPER") {
        computerScore++;
        log("LOST");
      } else {
        humanScore++;
        log("WIN");
      }
      break;
    case "PAPER":
      if (computerChoice === "ROCK") {
        humanScore++;
        log("WIN");
      } else if (computerChoice === "PAPER") {
        log("DRAW");
      } else {
        computerScore++;
        log("LOST");
      }
    case "SCISSORS":
      if (computerChoice === "ROCK") {
        computerScore++;
        log("LOST");
      } else if (computerChoice === "PAPER") {
        humanScore++;
        log("WIN");
      } else {
        log("DRAW");
      }
      break;
    default:
      log("INVALID CHOICE");
      break;
  }
}

function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 0.33) {
    return "ROCK";
  } else if (choice > 0.33 && choice <= 0.66) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function log(result) {
  let message = "";
  switch (result) {
    case "WIN":
      message = "You win!";
      break;
    case "LOST":
      message = "You lost!";
      break;
    case "DRAW":
      message = "It's a draw!";
      break;
    default:
      message = "Invalid choice!";
      break;
  }
  scoreSpan.innerText = `${message} Your score is: ${humanScore}. Computer score is ${computerScore}.`;
}

let buttons = document.querySelectorAll("button");
let scoreSpan = document.querySelector("#result");
for (let button of buttons) {
  button.addEventListener("click", function (e) {
    playRound(e.target.innerText);
  });
}
