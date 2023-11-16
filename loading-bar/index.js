const counter = document.querySelector('.counter');
const bar = document.querySelector('.loading-bar-front');

let id = 0;

const updateBar = () => {
	counter.innerText = id + '%';
	bar.style.width = id + '%';
	id++;
	if(id < 101){
		setTimeout(updateBar, 20);
	}
}

updateBar();