let timer;
let startTime;
let reactionTime = 0;
let isGameRunning = false;

function startGame() {
    if (isGameRunning) return;
    isGameRunning = true;
    document.getElementById("start-button").disabled = true;
    document.getElementById("game-instructions").style.display = "none";
    startTime = Date.now();

    setTimeout(() => {
        document.getElementById("start-button").style.backgroundColor = getRandomColor();
        startTimer();
    }, Math.random() * 3000 + 2000);
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timer = setInterval(() => {
        reactionTime = ((Date.now() - startTime) / 1000).toFixed(2);
        timerElement.textContent = reactionTime;
    }, 10);
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFD700', '#FF33A1'];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("start-button").onclick = () => {
    if (isGameRunning) {
        clearInterval(timer);
        document.getElementById("start-button").style.backgroundColor = "#4CAF50";
        alert(`Your reaction time is: ${reactionTime} seconds!`);
        isGameRunning = false;
        document.getElementById("start-button").disabled = false;
        document.getElementById("game-instructions").style.display = "block";
    }
};
