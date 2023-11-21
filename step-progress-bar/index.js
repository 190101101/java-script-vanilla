const nextEl = document.getElementById('next');
const prevEl = document.getElementById('prev');
const progressEl = document.querySelector('.progress-bar-front');
const stepsEl = document.querySelectorAll('.step');

let currentChecked = 1;

const updateStepProgress = () => {
  stepsEl.forEach((step, index) => {
    if(index < currentChecked){
        step.classList.add('checked');
        step.innerHTML = `<i class="fas fa-check"></i>
        <small>
        ${index === 0 ? "Start" : index === stepsEl.length - 1 ? "Final" : "Step " + index}
        </small>
      `;
    }
    else{
      step.classList.remove('checked');
      step.innerHTML = `<i class="fas fa-times"></i>`;
    }
  });

  const checkedNumber = document.querySelectorAll('.checked');
  progressEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + '%';
  
  if(currentChecked === 1){
    prevEl.disabled = true;
  }
  else if(checkedNumber === stepsEl.length){
    nextEl.disabled = true;
  }
  else{
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}

nextEl.addEventListener('click', () => {
  currentChecked++;
  if(currentChecked > stepsEl.length){
    currentChecked = stepsEl.length;
  }
  updateStepProgress();
});

prevEl.addEventListener('click', () => {
  currentChecked--;
  if(currentChecked < 1){
    currentChecked = 1;
  }
  updateStepProgress();
});
