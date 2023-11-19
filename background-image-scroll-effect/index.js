const bgImage = document.getElementById('bg-image');

const updateImage = () => {
  bgImage.style.opacity = 1 - window.pageYOffset / 900;
  bgImage.style.backgroundSize = 160 - window.pageYOffset / 12 + '%';
}

window.addEventListener('scroll', (e) => {
  updateImage();
})