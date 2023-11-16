const container = document.querySelector('.container');
const btn = document.getElementById('btn');
const bmiInput = document.getElementById('bmi-result');
const weightCondition = document.getElementById('weight-condition');

const calculateBMI = () => {
	const heightValue = document.getElementById('height').value / 100;
	const weightValue = document.getElementById('weight').value;

	const bmiValue = weightValue / (heightValue * heightValue);
	bmiInput.value = bmiValue;

	if(heightValue == '' || weightValue == ''){
		weightCondition.innerText = 'empty field';
		bmiInput.value = '';
	}
	else if(bmiValue < 18.5){
		weightCondition.innerText = 'Under weight';
	} else if(bmiValue >= 18.5 && bmiValue <= 24.9) {
		weightCondition.innerText = 'Normal weight';

	} else if(bmiValue >= 25 && bmiValue <= 29){
		weightCondition.innerText = 'Overweight';

	} else if(bmiValue >= 30){
		weightCondition.innerText = 'Obesity';
	}
}

btn.addEventListener('click', calculateBMI);

container.addEventListener('keydown', (e) => {
	console.log(e);
	e.key === 'Enter' && calculateBMI();
})