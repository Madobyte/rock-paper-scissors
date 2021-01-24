function playRound() {
    let playerSelection = this.id;
    let computerSelection = computerTurn();
    console.log(`Player: ${playerSelection} | CPU: ${computerSelection}`)
    let winner = whoWon(playerSelection, computerSelection);
    console.log(winner)
    document.getElementById("winner").innerText = winner;
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
    console.log(player, CPU)
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

document.getElementById("rock").onclick = playRound;
document.getElementById("paper").onclick = playRound;
document.getElementById("scissors").onclick = playRound;