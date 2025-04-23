const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let value = getRandomInt(3);
    let choice = document.getElementById("computer-choice");
    if(value == 0) {
        choice.textContent = "?";
        return "Rock";
    }
    else if(value == 1) {
        choice.textContent = "?";
        return "Paper";
    }
    else {
        choice.textContent = "??";
        return "Scissors";
    }
}

function playRound(userChoice, computerChoice) {
    if(userChoice.localeCompare(computerChoice) == 0) {
        return "That's a tie!";
    }
    else if(!userChoice.localeCompare(ROCK)) {
        if(!computerChoice.localeCompare(SCISSORS)) {
            userScore++;
            return "You won!";
        }
        else {
            computerScore++;
            return "The computer won!";
        }
    }
    else if(!userChoice.localeCompare(PAPER)) {
        if(!computerChoice.localeCompare(ROCK)) {
            userScore++;
            return "You won!";
        }
        else {
            computerScore++;
            return "The computer won!";
        }
    }
    else {
        if(!computerChoice.localeCompare(PAPER)) {
            userScore++;
            return "You won!";
        }
        else {
            computerScore++;
            return "The computer won!";
        }
    }
}

function showResult(userChoice, computerChoice, message) {
    let choices = document.getElementById("choices");
    let scores = document.getElementById("scores");
    let winner = document.getElementById("winner");

    choices.textContent = `Your choice was ${userChoice} and the computer's was ${computerChoice}. ${message}`;
    scores.textContent = `YOU: ${userScore} vs COMPUTER: ${computerScore}`;

    if(userScore == 5 || computerScore == 5) {
        if(userScore == 5) {
            winner.textContent = "You won the game!";
        }
        else if(computerScore == 5) {
            winner.textContent = "The computer won the game!"
        }
        let body = document.querySelector("body");
        let restart = document.createElement("button");
        restart.textContent = "Click here to restart the scores";
        restart.addEventListener("click", () => {
            userScore = 0;
            computerScore = 0;
            winner.textContent = "";
            body.removeChild(restart);
            scores.textContent = `YOU: ${userScore} vs COMPUTER: ${computerScore}`;
        });
        body.appendChild(restart);
    }

}

function eventRock() {
    let choice = document.getElementById("user-choice");
    choice.textContent = "?";
    let computerChoice = getComputerChoice().toLocaleLowerCase();
    let message = playRound(ROCK, computerChoice);
    showResult(ROCK, computerChoice, message, userScore, computerScore);
}

function eventPaper() {
    let choice = document.getElementById("user-choice");
    choice.textContent = "?";
    let computerChoice = getComputerChoice().toLocaleLowerCase();
    let message = playRound(PAPER, computerChoice);
    showResult(PAPER, computerChoice, message, userScore, computerScore);
}

function eventScissors() {
    let choice = document.getElementById("user-choice");
    choice.textContent = "??";
    let computerChoice = getComputerChoice().toLocaleLowerCase();
    let message = playRound(SCISSORS, computerChoice);
    showResult(SCISSORS, computerChoice, message, userScore, computerScore);
}

let userScore = 0;
let computerScore = 0;

let btnRock = document.querySelector("#btn-rock");
let btnPaper = document.querySelector("#btn-paper");
let btnScissors = document.querySelector("#btn-scissors");

btnRock.addEventListener("click", eventRock);
btnPaper.addEventListener("click", eventPaper);
btnScissors.addEventListener("click", eventScissors);