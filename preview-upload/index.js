const file = document.querySelector('#file');
const preview = document.querySelector('.preview-image');

file.addEventListener('change', function () {
  [...this.files].map((file) => {
    if (file.name.match(/\.jpe?g|png|gif/)) {
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        const image = new Image(100, 100);
        image.src = this.result;
        preview.appendChild(image);
      });
      reader.readAsDataURL(file);
    }

    if (file.name.match(/\.mp4/)) {
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        const video = document.createElement('video');
        video.width = 320;
        video.height = 320;
        video.controls = true;
        video.src = this.result;
        preview.appendChild(video);
      });
      reader.readAsDataURL(file);
    }
  });
});
