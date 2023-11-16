const container = document.querySelector('.container');
const input = document.querySelector('input');

const randomCode = () => {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let colorCode = '';
  for(let index = 0; index < colorCodeLength; index++){
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

for(let index = 0; index < 12; index++){
  const newCode = randomCode();
  const colorContainer = document.createElement('div');
  colorContainer.classList.add('element-container');
  colorContainer.setAttribute('data-element', newCode);
  colorContainer.innerHTML = newCode;
  container.appendChild(colorContainer);
}

const elements = document.querySelectorAll('.element-container');

input.addEventListener('input', (e) => {
  const colors = document.querySelectorAll('.element-container');
  let status = false;
  colors.forEach(element => {
    element.style.display = 'flex';
    if(!element.dataset.element.includes(input.value)){
      element.style.display = 'none';
    }
  })
})