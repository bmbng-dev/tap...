let score = 0;
let timer = 10;
let interval;
let gameStarted = false;

const targetButton = document.getElementById('targetButton');
const startButton = document.getElementById('startButton');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const gameArea = document.getElementById('gameArea');

// Fungsi untuk memindahkan target ke posisi acak
function moveTarget() {
    const gameAreaWidth = gameArea.offsetWidth;
    const gameAreaHeight = gameArea.offsetHeight;
    const buttonWidth = targetButton.offsetWidth;
    const buttonHeight = targetButton.offsetHeight;

    const randomX = Math.floor(Math.random() * (gameAreaWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (gameAreaHeight - buttonHeight));

    targetButton.style.left = `${randomX}px`;
    targetButton.style.top = `${randomY}px`;
    targetButton.style.display = 'block';
}

// Fungsi ketika target diklik
targetButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

// Fungsi untuk memulai permainan
startButton.addEventListener('click', () => {
    gameStarted = true;
    score = 0;
    timer = 10;
    scoreDisplay.textContent = score;
    targetButton.disabled = false;
    moveTarget();
    timerDisplay.textContent = `Waktu tersisa: ${timer} detik`;

    interval = setInterval(() => {
        timer--;
        timerDisplay.textContent = `waktune: ${timer} detik`;

        if (timer <= 0) {
            clearInterval(interval);
            gameStarted = false;
            targetButton.style.display = 'none';
            timerDisplay.textContent = `Waktu telas Skor em: ${score}`;
        }
    }, 1000);
});