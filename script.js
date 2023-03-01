function getComputerChoice() {
  const randNumber = Math.floor(Math.random() * 3) + 1;
  if (randNumber == 1) {
    return "rock";
  }
  if (randNumber == 2) {
    return "paper";
  }
  if (randNumber == 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  return playerSelection + " " + computerSelection;
}
/*
const playerSelection = window.prompt("Pick Rock, Paper, or Scissors");
const computerSelection = getComputerChoice();
*/

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("Pick Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
