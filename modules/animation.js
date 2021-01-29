export default function animateHands() {
    construct();
}

function construct() {
    const container = document.createElement('div');
    container.classList.add('hand-container')
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
}