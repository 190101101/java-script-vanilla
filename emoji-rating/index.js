const stars = document.querySelectorAll('.fa-star');
const emojis = document.querySelectorAll('.far');
const colors = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

const updateRating = (index) => {
	stars.forEach((star, id) => {
		if(id < index + 1){
			star.classList.add('active');
		}else{
			star.classList.remove('active');
		}
	})

	emojis.forEach((emoji) => {
		emoji.style.transform = `translateX(-${index * 50}px)`;
		emoji.style.color = colors[index];
	})
}

stars.forEach((star, index) => {
	star.addEventListener('click', () => {
		updateRating(index);
	})
})