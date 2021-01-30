export default function animateHands(playerSelection, computerSelection) {
    construct(playerSelection, computerSelection);
}

function construct(playerSelection, computerSelection) {
    const container = document.createElement('div');
    container.classList.add('hand-container');
    const playerHand =  document.createElement('img');
    const cpuHand =  document.createElement('img');
    playerHand.src = './assets/rock.png'
    playerHand.id = 'player-hand';
    playerHand.classList.add('hand');
    cpuHand.src = './assets/rock.png'
    cpuHand.id = 'cpu-hand';
    cpuHand.classList.add('hand');
    container.prepend(cpuHand);
    container.prepend(playerHand);
    document.body.prepend(container);
    playerHand.addEventListener('animationend', () => {
        playerHand.remove();
        cpuHand.remove();
        showHand(playerSelection, computerSelection);

    })
}

function showHand(playerSelection, computerSelection) {
    const container = document.querySelector('.hand-container');
    const playerHand = document.createElement('img');
    playerHand.src = `./assets/${playerSelection}.png`;
    playerHand.id = 'player-hand';
    playerHand.classList.add('hand');
    playerHand.style.cssText = 'animation: none;';
    const cpuHand = document.createElement('img');
    cpuHand.src = `./assets/${computerSelection}.png`;
    cpuHand.id = 'cpu-hand';
    cpuHand.classList.add('hand');
    cpuHand.style.cssText = 'animation: none;';
    container.prepend(cpuHand);
    container.prepend(playerHand);
}