let sequence = [];
let userInput = [];
let isGameRunning = false;
let timer;
let currentRound = 0;

function startGame() {
    if (isGameRunning) return;
    isGameRunning = true;
    document.getElementById("start-button").disabled = true;
    document.getElementById("game-instructions").style.display = "none";
    nextRound();
}

function nextRound() {
    currentRound++;
    userInput = [];
    sequence.push(Math.floor(Math.random() * 10));
    showSequence();
}

function showSequence() {
    let index = 0;
    const interval = setInterval(() => {
        alert(sequence[index]);
        index++;
        if (index === sequence.length) {
            clearInterval(interval);
            promptUser();
        }
    }, 1000);
}

function promptUser() {
    alert("Now, enter the sequence!");
    const userResponse = prompt("Enter the sequence: (comma separated)").split(',').map(Number);
    checkAnswer(userResponse);
}

function checkAnswer(userResponse) {
    if (userResponse.length === sequence.length && userResponse.every((value, index) => value === sequence[index])) {
        alert("Correct! Next round...");
        nextRound();
    } else {
        alert("Incorrect! Game Over.");
        isGameRunning = false;
        document.getElementById("start-button").disabled = false;
        document.getElementById("game-instructions").style.display = "block";
    }
}
