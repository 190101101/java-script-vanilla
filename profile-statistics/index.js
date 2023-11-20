const counters = document.querySelectorAll('.counter');

const incrementCounter = (counter) => {
  let currentNum = Number(counter.innerText);
  const dataCeil = counter.getAttribute('data-ceil');
  const increment = dataCeil / 15; 
  currentNum = Math.ceil(currentNum + increment);

  if(currentNum < dataCeil){
    counter.innerText = currentNum;

    setTimeout(() => {
      incrementCounter(counter);
    }, 50);

  }else{
    counter.innerText = dataCeil;
  }
}

counters.forEach((counter) => {
  counter.innerText = '0';
  incrementCounter(counter);
});
