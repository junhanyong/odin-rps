function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    return number
}

function getHumanChoice(choice) {
    switch(choice) {
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
            document.getElementById("computer").textContent = "Computer choice: Rock"
            break
        case 1:
            document.getElementById("computer").textContent = "Computer choice: Paper"
            break
        case 2:
            document.getElementById("computer").textContent = "Computer choice: Scissors"
            break
    }

    switch(result) {
        case 0:
            document.getElementById("results").textContent = "Draw!"
            break
        case 1:
            document.getElementById("results").textContent = "You win this round!"
            humanScore += 1
            break        
        case 2:
            document.getElementById("results").textContent = "You lose this round!"
            computerScore += 1
            break
        case -2:
            document.getElementById("results").textContent = "You win this round!"
            humanScore += 1
            break
        case -1:
            document.getElementById("results").textContent = "You lose this round!"
            computerScore += 1
            break
    }
    let scoreDiv = document.getElementById("score")
    scoreDiv.textContent = `human score: ${humanScore}, computer score: ${computerScore}`

    if (humanScore == 5) {
        document.getElementById("winner").textContent = "You are the winner!"
    } 
    else if (computerScore == 5) {
        document.getElementById("winner").textContent = "The computer is the winner!"
    }
}

let humanScore = 0
let computerScore = 0

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => {
    playRound(0, getComputerChoice())
})
paper.addEventListener("click", () => {
    playRound(1, getComputerChoice())
})
scissors.addEventListener("click", () => {
    playRound(2, getComputerChoice())
})



