const textarea = document.getElementById('textarea');
const totalCounter = document.getElementById('total-counter');
const remainingCounter = document.getElementById('remaining-counter');

textarea.addEventListener('keyup', () => {
  updateCounter();
})

const updateCounter = () => {
  totalCounter.innerText = textarea.value.length;
  remainingCounter.innerText = textarea.getAttribute('maxlength') - textarea.value.length
}