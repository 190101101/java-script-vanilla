const token = '4f94a6d7de59c068e9c7dbbed6320c1c';
const weatherData = document.getElementById('weather-data');
const cityInput = document.getElementById('city-input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const city = cityInput.value;
	console.log(city);
	getWeatherData(city);
});

const getWeatherData = async (city) => {
	try{
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`
			);

		if(!response.ok){
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		console.log(data);

		const temperature = Math.round(data.main.temp);
		const description = data.weather[0].description;
		const icon = data.weather[0].icon;

		const details = [
		`Feels Like: ${Math.round(data.main.feels_like)}`,
		`Humidity: ${data.main.humidity}%`,
		`Wind speed: ${data.wind.speed} m/s`,
		];

		weatherData.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weater icon">`;
		weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
		weatherData.querySelector(".description").textContent = description;

		weatherData.querySelector('.details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join('');

	}catch(error){
		weatherData.querySelector('.icon').innerHTML = '';
		weatherData.querySelector(".temperature").textContent = '';
		weatherData.querySelector(".description").textContent = 'An error happened please try again later';
		weatherData.querySelector(".details").textContent = '';
	}
}