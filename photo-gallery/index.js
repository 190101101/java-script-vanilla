const btn = document.getElementById('btn');
const errorMessage = document.getElementById('errorMessage');
const gallery = document.getElementById('gallery');

const fetchImage = async () => {
	const inputValue = Number(document.getElementById('input').value);

	if(inputValue > 10 || inputValue < 1){
		errorMessage.style.display = 'block';
		errorMessage.innerText = 'Number should be between 0 and 11';
		return;
	}

	images = '';

	try{
		btn.style.display = 'none';
		const loading = `<img src="spinner.svg">`;
		gallery.innerHTML = loading;

		await fetch(
			`https://api.unsplash.com/photos?per_page=${inputValue}&${Math.round(Math.random() * 1000)}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`
			)
		.then((response) => {
			if(response.ok === false){
				errorMessage.style.display = 'block';		
				errorMessage.innerHTML = 'An error happend, try again latter';
				btn.style.display = 'block';
				errorMessage.style.display = 'none';
				return;
			}
			return response.json();
		})
		.then((data) => {
			if(data){
				data.forEach((image) => {
					images += `<img src="${image.urls.small}" alt="image"/>`;
					gallery.style.display = 'block';
					gallery.innerHTML = images;
					btn.style.display = 'block';
					errorMessage.style.display = 'none';
				});
			}
		});
	}
	catch(error){
		console.log(43)
		console.log(error);
		errorMessage.style.display = 'block';		
		errorMessage.innerHTML = 'An error happend, try again latter';
		btn.style.display = 'block';
		errorMessage.style.display = 'none';
	}
}

btn.addEventListener('click', fetchImage);
