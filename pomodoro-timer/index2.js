let timeLeft = 1500;
let interval;

const updateTimer = () => {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	const data = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
	console.log(data);
}

const startTimer = () => {
	interval = setInterval(() => {
		timeLeft--;
		updateTimer();

		if(timeLeft == 0){
			clearInterval(interval);
			console.log('finish');
		}
	}, 1000);
}

startTimer();