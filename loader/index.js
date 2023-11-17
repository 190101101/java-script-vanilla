const token = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const searchResult = document.querySelector('.search-results');
const loader = document.querySelector('.loader');

const loadImages = async (page) => {

	const url = `https://api.unsplash.com/search/photos?page=${page}&query=cat&client_id=${token}`;
	const response = await fetch(url);
	const data = await response.json();

	const results = data.results;

	results.map((result, index) => {
		const imageWrapper = document.createElement('div');
		imageWrapper.classList.add('search-result');

		const image = document.createElement('img');
		image.src = result.urls.small;
		image.alt = result.alt_description;

		const link = document.createElement('a');
		link.href = result.links.html
		link.target = "_blank";
		link.textContent = result.alt_description;

		const span = document.createElement('span');
		span.textContent = index;

		imageWrapper.appendChild(image);
		imageWrapper.appendChild(link);
		searchResult.appendChild(imageWrapper);
	});

	console.log(results);
}

loadImages(1);
loadImages(2);
loadImages(3);

//loader
window.addEventListener('load', (e) => {
	loader.style.width = "100%";
	setTimeout(() => {
		loader.style.left = "100%";
	}, 3000)
})
