let slideIndex = 0;
let slides = document.getElementsByClassName('slides'),
  dots = document.getElementsByClassName('dot'),
  arrowLeft = document.querySelector('#arrow-left'),
  arrowRight = document.querySelector('#arrow-right');

showSlides();
function showSlides() {
  reset();
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 3000);
}
//show prev
function slideLeft() {
  reset();
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className.replace(' active', '');
  slideIndex--;
}
//show next
function slideRight() {
  reset();
  slides[slideIndex + 1].style.display = 'block';
  dots[slideIndex + 1].className.replace(' active', '');

  slideIndex++;
}
//left arrow click
arrowLeft.addEventListener('click', function() {
  if (slideIndex === 0) {
    slideIndex = slides.length;
  }
  slideLeft();
});
//right arrow click
arrowRight.addEventListener('click', function() {
  if (slideIndex === slides.length - 1) {
    slideIndex = -1;
  }
  slideRight();
});
//reset
function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}
