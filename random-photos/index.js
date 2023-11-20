const imageContainer = document.querySelector('.image-container');
const btn = document.querySelector('.btn');

const addNewImages = () => {
  for(let index = 0; index < 10; index++){
    const newImage = document.createElement('img');
    newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainer.appendChild(newImage);
  }
}

btn.addEventListener('click', addNewImages);
