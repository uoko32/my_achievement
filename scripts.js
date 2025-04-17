document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.card-img-top');
  const overlay = document.getElementById('overlay');
  const overlayImage = overlay.querySelector('img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      overlayImage.src = img.src;
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayImage.src = '';
  });
});
