//your JS code here. If required.
const videoElement = document.getElementById('meditation-video');
const audioElement = document.getElementById('meditation-audio');
const timeDisplay = document.getElementById('time-display');
const playPauseBtn = document.getElementById('play-pause-btn');
const sound1Button = document.getElementById('sound-1');
const sound2Button = document.getElementById('sound-2');
const smallerMinsButton = document.getElementById('smaller-mins');
const mediumMinsButton = document.getElementById('medium-mins');
const longMinsButton = document.getElementById('long-mins');

let timeLeft = 600; // Default 10 minutes in seconds
let timerInterval = null;

// Function to start and pause the meditation session
playPauseBtn.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        videoElement.play();
        playPauseBtn.textContent = 'Pause';
        startTimer();
    } else {
        audioElement.pause();
        videoElement.pause();
        playPauseBtn.textContent = 'Play';
        clearInterval(timerInterval);
    }
});

// Function to start the countdown timer
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
            timeDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        } else {
            clearInterval(timerInterval);
            alert('Meditation session finished!');
        }
    }, 1000);
}

// Function to handle switching between meditation sounds
sound1Button.addEventListener('click', () => {
    audioElement.src = 'Sounds/beach.mp3';
    videoElement.src = 'video/beach.mp4';
    audioElement.play();
    videoElement.play();
});

sound2Button.addEventListener('click', () => {
    audioElement.src = 'Sounds/rain.mp3';
    videoElement.src = 'video/rain.mp4';
    audioElement.play();
    videoElement.play();
});

// Function to handle time selection buttons
smallerMinsButton.addEventListener('click', () => {
    timeLeft = 120; // 2 minutes in seconds
    timeDisplay.textContent = '2:00';
    resetTimer();
});

mediumMinsButton.addEventListener('click', () => {
    timeLeft = 300; // 5 minutes in seconds
    timeDisplay.textContent = '5:00';
    resetTimer();
});

longMinsButton.addEventListener('click', () => {
    timeLeft = 600; // 10 minutes in seconds
    timeDisplay.textContent = '10:00';
    resetTimer();
});

// Reset the timer when the time changes
function resetTimer() {
    clearInterval(timerInterval);
    if (!audioElement.paused) {
        startTimer();
    }
}
