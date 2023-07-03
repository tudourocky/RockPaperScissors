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

function openGameoverScreen() {
    document.getElementById("gameoverModal").classList.add('active');
    document.getElementById("overlay").classList.add('active');
}

function closeGameoverScreen() {
    document.getElementById("gameoverModal").classList.remove('active');
    document.getElementById("overlay").classList.remove('active');
}

function endGame(winner) {
    if(winner === "player") document.getElementById("result").innerHTML = 'The computer has won!';
    else document.getElementById("result").innerHTML = 'The player has won!';
    openGameoverScreen();
}


let playerScore = 0;
let computerScore = 0;

function handleClick(playerSelection) {
    let roundResult;
    let computerChoice = getComputerChoice();

    if (playerSelection === "rock") {
        roundResult = playRound("rock", computerChoice);
    } else if (playerSelection === "paper") {
        roundResult = playRound("paper", computerChoice);
    } else if (playerSelection === "scissors") {
        roundResult = playRound("scissors", computerChoice);
    }

    if (roundResult === "player won") {
        playerScore++;
        document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore}`;
    } else if (roundResult === "computer won") {
        computerScore++;
        document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
    }

    // check if game is over
    if (playerScore === 5) {
        endGame("player");
        return;
    } else if (computerScore === 5) {
        endGame("computer");
        return;
    }
}


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


rockBtn.addEventListener('click', () => {
    handleClick("rock");
});

paperBtn.addEventListener('click', () => {
    handleClick("paper");
});

scissorsBtn.addEventListener('click', () => {
    handleClick("scissors");
});

function playAgain() {
    document.getElementById("restartBtn").addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("computerScore").innerHTML = "Computer Score: 0";
        document.getElementById("playerScore").innerHTML = "Player Score: 0";
        closeGameoverScreen();
    });
}