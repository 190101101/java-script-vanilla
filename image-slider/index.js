const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const images = document.querySelectorAll('img');
const imageContainer = document.querySelector('.image-container');

let currentImage = 1;
let timeout = 1;

const updateImage = () => {
	if(currentImage > images.length){
		currentImage = 1;
	} else if(currentImage < 1){
		currentImage = images.length;
	}

	imageContainer.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;

	timeout = setTimeout(() => {
		currentImage++;
		updateImage();
	}, 500)
}

next.addEventListener('click', () => {
	currentImage++;
	updateImage();
})

prev.addEventListener('click', () => {
	currentImage--;
	updateImage();
})

