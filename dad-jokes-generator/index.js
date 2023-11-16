const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

const token = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
	method: 'GET',
	headers:{
		'X-Api-Key': token
	}
};

const URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const getJoke = async () => {
	try{
		joke.innerText = "Updating...";
		btn.disabled = true;
		btn.innerText = "Updating..."

		const response = await fetch(URL, options);
		const data = await response.json();

		btn.disabled = false;
		btn.innerText = "Tell me a joke";
		joke.innerText = data[0].joke;
		console.log(data);

	}catch(err) {
		joke.innerText = 'An error happend, try again later';
		btn.disabled = false;
		btn.innerText = "Tell me a joke";
		console.log(err);
	}
}

btn.addEventListener('click', getJoke);