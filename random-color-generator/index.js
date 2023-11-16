const container = document.querySelector('.container');
const input = document.querySelector('input');

for(let index = 0; index < 16; index++){
  const colorContainer = document.createElement('div');
  colorContainer.classList.add('color-container');
  container.appendChild(colorContainer);
}

const elements = document.querySelectorAll('.color-container');

const randomColor = () => {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let colorCode = '';
  for(let index = 0; index < colorCodeLength; index++){
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

const generateColors = () => {
  elements.forEach((element) => {
    const newColorCode = randomColor();
    element.style.backgroundColor = `#${newColorCode}`;
    element.innerText = `#${newColorCode}`;
    element.setAttribute('data-color', newColorCode);
  });
}

generateColors();

input.addEventListener('input', (e) => {
  const colors = document.querySelectorAll('.color-container');
  let status = false;
  colors.forEach(element => {
    element.style.display = 'flex';
    if(!element.dataset.color.includes(input.value)){
      element.style.display = 'none';
    }
  })
})