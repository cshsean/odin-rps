function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock":
                return "Tied!"
            case "paper":
                return "You Lose! Paper beats Rock!"
            case "scissors":
                return "You Won! Rock beats Scissors!"
        }
    } else if (playerSelection == "scissors") {
        switch(computerSelection) {
            case "rock":
                return "You Lost! Rock beats Scissors!"
            case "paper":
                return "You Won! Scissors beats Paper!"
            case "scissors":
                return "Tied!"
        }
    } else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                return "You Won! Paper beats Rock!"
            case "paper":
                return "Tied!"
            case "scissors":
                return "You Lost! Scissors beats Paper!"
        }
    } else {
        return "bruh"
    }
}

function game() {
    let n = 0
    let player = 0
    let comp = 0
    
    while (n < 5) {
        var playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase().trim();
        while (!['rock','paper','scissors'].includes(playerSelection)) {
            playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase().trim();
        }
        const computerSelection = getComputerChoice();
        lmao = playRound(playerSelection, computerSelection);
        console.log(lmao);
        if (lmao[4] == "W") {
            player++;
        } else if (lmao[4] == "L") {
            comp++;
        }
        n++;
    }
    
    if (player > comp) {
        console.log("Player Won!")
    } else if(player < comp) {
        console.log("Player Lost!")
    } else {
        console.log("Game Tied!")
    }
}

game()