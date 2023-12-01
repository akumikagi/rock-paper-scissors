let playerSelection;
let computerSelection;
let playerWins = 0;
let comWins = 0;

// resolveRound(playerSelection, computerSelection);
game();

function getPlayerChoice() {
  let input = prompt("Rock Paper Scissors!:", "");
  input = input.toLocaleLowerCase();
  return input;
}

function getComputerChoice() {
  let roll = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * roll.length);
  let action = roll[random];
  return action;
}

function resolveRound(player, computer) {
 if (player === "rock" && computer === "rock") {
    alert("Rocks! It's a tie!");
    replay();
  }
  else if (player === "rock" && computer === "paper") {
    alert("You lose! Paper beats rock");
    comWins++;
  }
  else if (player === "rock" && computer === "scissors") {
    alert("You win! Rock beats scissors");
    playerWins++;
  }
  else if (player === "paper" && computer === "rock") {
    alert("You win! Paper beats rock");
    playerWins++;
  }
  else if (player === "paper" && computer === "paper") {
    alert("Papers! It's a tie!");
    replay();
  }
  else if (player === "paper" && computer === "scissors") {
    alert("You lose! Scissors beat paper");
    comWins++;
  }
  else if (player === "scissors" && computer === "rock") {
    alert("You lose! Rock beats scissors");
    comWins++;
  }
  else if (player === "scissors" && computer === "paper") {
    alert("You win! Scissors beat paper");
    playerWins++;
  }
  else if (player === "scissors" && computer === "scissors") {
    alert("Scissors! It's a tie!");
    replay();
  }
}

function replay() {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  resolveRound(playerSelection, computerSelection);
}

function game() {
  for (let i = 1; i <= 5; i++) {
    replay();
    console.log(`Current score: Player ${playerWins} : ${comWins}`);
  }
  if (playerWins > comWins) {
    console.log("You win!");
  }
  else {
    console.log("You lose!");
  }
}