const input = document.getElementById('input');
const error = document.getElementById('error');
const result = document.getElementById('result');

let errorTime;
let resultTime;

const updateResult = () => {
   if(input.value <= 0 || isNaN(input.value)) {
    error.innerText = 'Please enter a valid number!';
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      error.innerText = '';
      input.value = '';
    }, 2000);  
  }
  else{
    result.innerText = (Number(input.value / 2.2).toFixed(2));
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      result.innerText = '';
      input.value = '';
    }, 5000);
  }
}

input.addEventListener('input', updateResult);