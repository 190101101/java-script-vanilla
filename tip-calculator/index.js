const button = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalSpan = document.getElementById('total');
const resultSpan = document.getElementById('result');

const calculateTotal = () => {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * ( 1 + tipValue / 100);

  totalSpan.innerText = totalValue.toFixed(2);
  resultSpan.innerText = (totalValue - billValue).toFixed(2);
}

button.addEventListener('click', calculateTotal);