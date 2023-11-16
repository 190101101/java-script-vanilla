window.addEventListener('mousemove', (e) => {
	document.getElementById('positionX').innerHTML = e.clientX;
	document.getElementById('positionY').innerHTML = e.clientY;
})