const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ul = document.querySelector('.list');

let list = JSON.parse(localStorage.getItem('list'));

if(list){
	list.forEach((task) => {
		toDoList(task);
	})
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	toDoList();
})

const toDoList = (task) => {
	let newTask = input.value;
	if(task){
		newTask = task.name;
	}

	const li = document.createElement('li');
	if(task && task.checked){
		li.classList.add('checked');
	}

	li.innerText = newTask;
	ul.appendChild(li);
	input.value = '';

	const checkBtn = document.createElement('div');
	checkBtn.innerHTML = '<i class="fas fa-check-square"></i>';
	li.appendChild(checkBtn);

	const trashBtn = document.createElement('div');
	trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
	li.appendChild(trashBtn);

	checkBtn.addEventListener('click', () => {
		li.classList.toggle('checked');
		updateLocalStorage();
	});

	trashBtn.addEventListener('click', () => {
		li.remove();
		updateLocalStorage();
	});
}

const updateLocalStorage = () => {
	const elements = document.querySelectorAll('li');
	list = [];

	elements.forEach((element) => {
		list.push({
			name: element.innerText,
			checked: element.classList.contains('checked'),
		});
	});
	localStorage.setItem('list', JSON.stringify(list));
}