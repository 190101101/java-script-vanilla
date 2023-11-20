const button = document.getElementById('roll-button');
const dice = document.getElementById('dice');
const rollHistory = document.getElementById('roll-history');

let historyList = [];

const diceFace = {
  1: "&#9856;",
  2: "&#9857;",
  3: "&#9858;",
  4: "&#9859;",
  5: "&#9860;",
  6: "&#9861;",
}

const rollDice = () => {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = diceFace[rollResult];
  historyList.push(rollResult);
  updateRollHistory();
}

const updateRollHistory = () => {
  rollHistory.innerHTML = '';
  for(let i = 0; i < historyList.length; i++){
    const listItem = document.createElement('li');
    listItem.innerHTML = `Roll ${i + 1}: 
    <span>${diceFace[historyList[i]]}</span>`
    rollHistory.prepend(listItem);
  };
}

button.addEventListener('click', () => {
  button.disabled = true;
  button.style.color = '#000';
  dice.classList.add('roll-animation');
  setTimeout(() => {
    button.disabled = false;
    button.style.color = '#fff';
    dice.classList.remove('roll-animation');
    rollDice();
  }, 1000);
})
