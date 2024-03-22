function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0)
        return "ROCK";
    else if (choice == 1)
        return "PAPER";
    else
        return "SCISSORS";
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase())
        return "Tie!";
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "PAPER")
        return "You Lose! Paper beats Rock";
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "SCISSORS")
        return "You Win! Rock beats Scissors";
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK")
        return "You Win! Paper beats Rock";
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "SCISSORS")
        return "You Lose! Scissors beats Paper";
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "ROCK")
        return "You Lose! Rock beats Scissors";
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "PAPER")
        return "You Win! Scissors beats Paper"
    else
        return "Invalid";
}

let playerSelection = "paper";
let computerSelection = getComputerChoice();
console.log(`Player: ${playerSelection}  |  Computer: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));