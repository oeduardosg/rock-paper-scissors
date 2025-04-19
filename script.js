function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let value = getRandomInt(3);
    if(value == 0) return "Rock";
    else if(value == 1) return "Paper";
    else return "Scissors";
}

function playRound(userChoice, computerChoice) {
    if(userChoice.localeCompare(computerChoice) == 0) {
        console.log("That's a tie!");
    }
    else if(!userChoice.localeCompare(r)) {
        if(!computerChoice.localeCompare(s)) {
            console.log("You won!");
            userScore++;
        }
        else {
            console.log("The computer won!");
            computerScore++;
        }
    }
    else if(!userChoice.localeCompare(p)) {
        if(!computerChoice.localeCompare(r)) {
            console.log("You won!");
            userScore++;
        }
        else {
            console.log("The computer won!");
            computerScore++;
        }
    }
    else {
        if(!computerChoice.localeCompare(p)) {
            console.log("You won!");
            userScore++;
        }
        else {
            console.log("The computer won!");
            computerScore++;
        }
    }
}

const r = "rock";
const p = "paper";
const s = "scissors";

let i = 0;
let userScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++) {
    let userChoice = prompt("Let's play rock, paper and scissors! What's your play?").toLocaleLowerCase();
    let computerChoice = getComputerChoice().toLocaleLowerCase();

    console.log(`Your choice was ${userChoice} and the computer was ${computerChoice}`);
    playRound(userChoice, computerChoice);
    console.log(`YOU: ${userScore} vs COMPUTER: ${computerScore}`);
}