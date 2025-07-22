function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    return number
}

function getHumanChoice() {
    let choice = prompt("rock, paper, scissors") 
    switch(choice.toLowerCase()) {
        case "rock":
            return 0
        case "paper":
            return 1
        case "scissors":
            return 2
        default:
            return "error"
    }
}

function playRound(humanChoice, computerChoice) {
    result = humanChoice - computerChoice
    switch(computerChoice) {
        case 0:
            console.log("Computer choice: Rock")
            break
        case 1:
            console.log("Computer choice: Paper")
            break
        case 2:
            console.log("Computer choice: Scissors")
            break
    }

    switch(result) {
        case 0:
            console.log("Draw!")
            break
        case 1:
            console.log("You win!")
            humanScore += 1
            break
        case -2:
            console.log("You win!")
            humanScore += 1
            break
        case -1:
            console.log("You lose!")
            computerScore += 1
            break
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        console.log("Computer score: " + computerScore)
        console.log("Human score: " + humanScore)
    }
}

let humanScore = 0
let computerScore = 0

playGame()