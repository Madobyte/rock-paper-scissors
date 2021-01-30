import animateHands from './modules/animation.js';

function playRound() {
    const playerSelection = this.id;
    const computerSelection = computerTurn();
    console.log(`Player: ${playerSelection} | CPU: ${computerSelection}`)
    const winner = whoWon(playerSelection, computerSelection);
    animateHands(playerSelection, computerSelection);
    const hands = document.addEventListener('animationend', function declareWinner() {
        setTimeout(() => {
            winnerModal.classList.add('open');
            winnerPar.innerText = winner;
            const handContainer = document.querySelector('.hand-container');
            handContainer.remove();
        }, 1000);
    });
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

function removeModal(e) {
    if (e.target.classList[0] === 'modal' || e.target.classList[0] === 'fa') {
        winnerModal.classList.remove('open')
    }
}

/* Modal */
const winnerModal = document.createElement('div');
winnerModal.classList.add('modal');
const winnerModalContent = document.createElement('div');
winnerModalContent.classList.add('modal-content');
const winnerPar = document.createElement('p');
winnerModalContent.appendChild(winnerPar);
const closeBtn = document.createElement('i');
closeBtn.classList.add('fa', 'fa-times-circle');
winnerModalContent.appendChild(closeBtn);
winnerModal.appendChild(winnerModalContent);
const section = document.getElementById('container');
document.body.insertBefore(winnerModal, section);

winnerModal.addEventListener('click', removeModal);

document.getElementById('rock').addEventListener('click', playRound);
document.getElementById('paper').addEventListener('click', playRound);
document.getElementById('scissors').addEventListener('click', playRound);