function getRandomNumber() {
  return Math.floor(Math.random() * 3 + 1);
}

function getComputerChoice() {
  const cChoice = getRandomNumber()
  if ((cChoice = 1)) {
    return "rock";
  }
  if ((cChoice = 2)) {
    return "paper";
  }
  if ((cChoice = 3)) {
    return "scissors";
  }
}

function playRound() {
  console.log(getComputerChoice())
}

playRound()
