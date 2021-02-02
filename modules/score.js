export default function score(winner) {
    console.log(winner);
    if (winner === 'CPU Wins') { 
        cpuScore += 1
    } else if (winner === 'Player Wins') {
        playerScore += 1
    } 
    console.log(`${playerScore} : ${cpuScore}`);
    const hands = document.getElementById('player-hand');
    hands.addEventListener('animationend', function showScore() {
        standing.innerHTML = `${playerScore} : ${cpuScore}`;
        if (cpuScore === 5) {
            setTimeout(() => {
                showWinnerModal('CPU WON!')
            }, 800)
        }
        else if (playerScore === 5) {
            setTimeout(() => {
                showWinnerModal('PLAYER WON!')
            }, 800)
        }
    })
}

function showWinnerModal(winner) {
    const winnerModal = document.createElement('div');
    winnerModal.classList.add('modal');
    const winnerModalContent = document.createElement('div');
    winnerModalContent.classList.add('modal-content');
    const winnerPar = document.createElement('p');
    winnerPar.innerText = winner;
    winnerModalContent.appendChild(winnerPar);
    const newGameBtn = document.createElement('button');
    newGameBtn.classList.add('new-game-btn');
    newGameBtn.innerText = 'New Game'
    winnerModal.appendChild(winnerModalContent);
    winnerModalContent.appendChild(newGameBtn);
    const section = document.getElementById('container');
    document.body.insertBefore(winnerModal, section);

    newGameBtn.addEventListener('click', () => {
        location.reload();
    })
}

let playerScore = 0;
let cpuScore = 0;

const scoreContainer = document.createElement('div');
scoreContainer.classList.add('score-container')
const standing = document.createElement('p');
standing.classList.add('standing')
standing.innerHTML = `${playerScore} : ${cpuScore}`;

const resetBtn = document.createElement('button');
resetBtn.classList.add('reset-btn');
resetBtn.innerText = 'Reset'
resetBtn.addEventListener('click', () => {
    location.reload();
})

scoreContainer.appendChild(standing);
scoreContainer.appendChild(resetBtn);
document.body.prepend(scoreContainer);