const ratings = document.querySelectorAll('.rating');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

let selectedRating = "";

ratings.forEach((rating) => {
  rating.addEventListener('click', (e) => {
    removeActive();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add('active');
    e.target.parentNode.classList.add('active');
  })
})

btn.addEventListener('click', () => {
  if(selectedRating === '') return;

  container.innerHTML = `
  <strong>Thank you!</strong>
  <br>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support.</p>
  `;
});

const removeActive = () => {
  ratings.forEach((rating) => {
    rating.classList.remove('active');
  })
}