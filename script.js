function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "tie";
        } else if (computerSelection === "paper") {
            return "computer won";
        } else if (computerSelection === "scissors") {
            return "player won";
        } else return "invalid input";
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "player won";
        } else if (computerSelection === "paper") {
            return "tie";
        } else if (computerSelection === "scissors") {
            return "computer won";
        } else {
            return "invalid input";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "computer won";
        } else if (computerSelection === "paper") {
            return "player won";
        } else if (computerSelection === "scissors") {
            return "tie";
        } else {
            return "invalid input";
        }
    } else {
        return "invalid input";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (true) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Enter either Rock, Paper, or Scissors");
        let result = playRound(playerChoice, computerChoice);
        if (result === "player won") {
            playerScore++;
        } else if (result === "computer won") {
            computerScore++;
        }

        // check if game is over
        if (playerScore === 3) {
            return "player won";
        } else if (computerScore === 3) {
            return "computer won";
        }
    }
}

console.log(game());