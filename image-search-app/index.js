const token = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const form = document.querySelector('form');
const searchInput = document.getElementById('search-input');
const searchResult = document.querySelector('.search-results');
const showMoreButton = document.getElementById('show-more-button');

let inputData = "";
let page = 1;

const searchImages = async () => {
	inputData = searchInput.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${token}`;
	const response = await fetch(url);
	const data = await response.json();

	if(page === 1){
		response.innerHTML = "";
	}

	const results = data.results;

	console.log(results);

	results.map((result) => {
		const imageWrapper = document.createElement('div');
		imageWrapper.classList.add('search-result');

		const image = document.createElement('img');
		image.src = result.urls.small;
		image.alt = result.alt_description;

		const link = document.createElement('a');
		link.href = result.links.html
		link.target = "_blank";
		link.textContent = result.alt_description;

		imageWrapper.appendChild(image);
		imageWrapper.appendChild(link);
		searchResult.appendChild(imageWrapper);
	});

	page++;

	if(page > 1){
		showMoreButton.style.display = 'block';
	}

}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	page = 1;
	searchImages();
})


showMoreButton.addEventListener('click', () => {
	searchImages();
})