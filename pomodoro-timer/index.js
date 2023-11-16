const start = document.getElementById('start');
const stop = document.getElementById('stop');
const step = document.getElementById('step');
const timer = document.getElementById('timer');

let interval;
let timeLeft = 1500;

const updateTimer = () => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  timer.innerHTML = formattedTime;
}

const startTimer = () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if(timeLeft === 0){
      clearInterval(interval);
      alert('times up');
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

const stopTimer = () => {
  clearInterval(interval);
}

const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);