let playerSelection;
let computerSelection;
let playerWins = 0;
let comWins = 0;

const controls = document.querySelector("#controls");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const buttons = document.querySelectorAll("button");

score.textContent = `${playerWins}:${comWins}`;

addEventListener("contextmenu", (e) => e.preventDefault());

controls.addEventListener("click", (event) => {
  let target = event.target;

  switch(target.id) {
    case "rock":
      playerSelection = "rock";
      break;
    case "paper":
      playerSelection = "paper";
      break;
    case "scissors":
      playerSelection = "scissors";
      break;
  }

  game();
});

game();

//function getPlayerChoice() {
//  let input = prompt("Rock Paper Scissors!:", "");
//  input = input.toLocaleLowerCase();
//  return input;
//}

function getComputerChoice() {
  let roll = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * roll.length);
  let action = roll[random];
  return action;
}

function resolveRound(player, computer) {
 if (player === "rock" && computer === "rock") {
    result.textContent = "Rocks! It's a tie!";
  }
  else if (player === "rock" && computer === "paper") {
    result.textContent = "You lose! Paper beats rock";
    score.textContent = `${playerWins}:${++comWins}`;   
  }
  else if (player === "rock" && computer === "scissors") {
    result.textContent = "You win! Rock beats scissors";
    score.textContent = `${++playerWins}:${comWins}`;
  }
  else if (player === "paper" && computer === "rock") {
    result.textContent = "You win! Paper beats rock";
    score.textContent = `${++playerWins}:${comWins}`;
  }
  else if (player === "paper" && computer === "paper") {
    result.textContent = "Papers! It's a tie!";
  }
  else if (player === "paper" && computer === "scissors") {
    result.textContent = "You lose! Scissors beat paper";
    score.textContent = `${playerWins}:${++comWins}`; 
  }
  else if (player === "scissors" && computer === "rock") {
    result.textContent = "You lose! Rock beats scissors";
    score.textContent = `${playerWins}:${++comWins}`; 
  }
  else if (player === "scissors" && computer === "paper") {
    result.textContent = "You win! Scissors beat paper";
    score.textContent = `${++playerWins}:${comWins}`;
  }
  else if (player === "scissors" && computer === "scissors") {
    result.textContent = "Scissors! It's a tie!";
  }
}

function game() {
  computerSelection = getComputerChoice();
  resolveRound(playerSelection, computerSelection);
  if(playerWins === 5 || comWins === 5) {
    for(let button of buttons) {
      button.disabled = true;
    }
    if(playerWins === 5) {
      score.textContent += " You win! Click this text to start over!";
    }
    else if(comWins === 5) {
      score.textContent += " You lose! Click this text to start over!";
    }
  
  score.addEventListener("click", newGame);
  }
}

function newGame() {
  playerWins = 0;
  comWins = 0;
  score.textContent = `${playerWins}:${comWins}`;
  for(let button of buttons) {
    button.disabled = false;
  }
  score.removeEventListener("click", newGame);
}

// function game() {
//  for (let i = 1; i <= 5; i++) {
//    replay();
//    console.log(`Current score: Player ${playerWins} : ${comWins}`);
//  }
//  if (playerWins > comWins) {
//   console.log("You win!");
//  }
//  else {
//    console.log("You lose!");
//  }
//}