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
    /* const closeBtn = document.createElement('i');
    closeBtn.classList.add('fa', 'fa-times-circle'); */
    const newGameBtn = document.createElement('button');
    newGameBtn.classList.add('new-game-btn');
    newGameBtn.innerText = 'New Game'
    /* winnerModalContent.appendChild(closeBtn); */
    winnerModal.appendChild(winnerModalContent);
    winnerModalContent.appendChild(newGameBtn);

    const section = document.getElementById('container');
    document.body.insertBefore(winnerModal, section);

    //winnerModal.addEventListener('click', removeModal)
    newGameBtn.addEventListener('click', () => {
        location.reload();
    })
}

/* function removeModal(e) {
    const winnerModal = document.querySelector('.modal');
    if (e.target.classList[0] === 'modal' || 
        e.target.classList[1] === 'fa-times-circle' || 
        e.code === 'Escape') {
        winnerModal.remove();
    }
} */

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
//standing.parentNode.insertBefore(resetBtn, standing.nextSibling);
resetBtn.addEventListener('click', () => {
    /* playerScore = 0;
    cpuScore = 0;
    standing.innerHTML = `${playerScore} : ${cpuScore}`; */
    location.reload();
})

scoreContainer.appendChild(standing);
scoreContainer.appendChild(resetBtn);
document.body.prepend(scoreContainer);