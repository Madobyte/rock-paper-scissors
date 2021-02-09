import animateHands from './modules/animation.js';
import score from './modules/score.js';
import appWrapper from './modules/appWrapper.js'

function playRound() {
    const playerSelection = this.id;
    const cpuSelection = computerTurn();
    console.log(`Player: ${playerSelection} | CPU: ${cpuSelection}`)
    animateHands(playerSelection, cpuSelection);
    const winner = whoWon(playerSelection, cpuSelection);
    const hands = document.getElementById('player-hand');
    hands.addEventListener('animationend', () => {
        setTimeout(() => {
            const handContainer = document.querySelector('.hand-container');
            handContainer.remove();
        }, 800);
    });
    score(winner);
}

function computerTurn() {
    const randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function whoWon(player, CPU) {
    if (player === CPU) return "It's a tie!"
    else if (player === "rock") {
        if (CPU === "paper") return "CPU Wins"
        else return "Player Wins"
    }
    else if (player === "paper") {
        if (CPU === "scissors") return "CPU Wins"
        else return "Player Wins"
    }
    else if (player === "scissors") {
        if (CPU === "rock") return "CPU Wins"
        else return "Player Wins"
    }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

appWrapper();