const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctAnswer = num1 * num2;

const question = document.getElementById('question');
const input = document.getElementById('input');
const form = document.getElementById('form');
const score = document.getElementById('score');

let scoreData = JSON.parse(localStorage.getItem('score'));

if(!scoreData){
	scoreData = 0;
}

const updateLocalStorage = () => {
	localStorage.setItem('score', JSON.stringify(scoreData));
}

score.innerText = `score: ${scoreData}`;
question.innerText = `What is ${num1} multiple by ${num2}`;

form.addEventListener('submit', (e) => {
	const userAnswer = Number(input.value);

	if(userAnswer === correctAnswer){
		scoreData++;
		updateLocalStorage();
	}else{
		scoreData--;
		updateLocalStorage();
	}
})

