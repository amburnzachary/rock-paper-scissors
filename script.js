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
    if (playerSelection.toUpperCase() == computerSelection)
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
        return "You Win! Scissors beats Paper";
    else
        return "Invalid";
}

function playGame (rounds) {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < rounds; ++i) {
        let playerSelection = prompt("Rock, Paper, or Scissors: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.charAt(4) == "W") {
            playerScore++;
            console.log(result);
        }
        else if (result.charAt(4) == "L") {
            computerScore++;
            console.log(result);
        }
        else {
            console.log(result);
        }
    }
    if (playerScore > computerScore) {
        return `You're the Winner! You won ${playerScore} games, and lost ${computerScore}!`;
    }
    else if (playerScore < computerScore) {
        return `Sorry, you lost. You lost ${computerScore} games, and won ${playerScore}.`;
    }
    else
        return `Tie! You both won ${playerScore} games!`;
}
