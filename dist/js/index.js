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
// click arrow right next page manicure
let arrowRightPage = document.querySelector('.arrow-right');
arrowRightPage.addEventListener('click', function() {
  document.querySelector('.arrow-span-two').style.display = 'inline-block';
  document.querySelector('.arrow-span-one').style.display = 'none';
  document.querySelector('#manicure-one').style.display = 'none';
  document.querySelector('#manicure-two').style.display = 'block';
});
// click arrow left prev page manicure
let arrowLeftPage = document.querySelector('.arrow-left');
arrowLeftPage.addEventListener('click', function() {
  document.querySelector('.arrow-span-two').style.display = 'none';
  document.querySelector('.arrow-span-one').style.display = 'inline-block';
  document.querySelector('#manicure-two').style.display = 'none';
  document.querySelector('#manicure-one').style.display = 'block';
});

// click arrow right next page waxing
let waxingArrowRightPage = document.querySelector('#waxing-arrow-right');
waxingArrowRightPage.addEventListener('click', function() {
  document.querySelector('#waxing-arrow-span-two').style.display =
    'inline-block';
  document.querySelector('#waxing-arrow-span-one').style.display = 'none';
  document.querySelector('#waxing-one').style.display = 'none';
  document.querySelector('#waxing-two').style.display = 'block';
});
// click arrow left prev page waxing
let waxingArrowLeftPage = document.querySelector('#waxing-arrow-left');
waxingArrowLeftPage.addEventListener('click', function() {
  document.querySelector('#waxing-arrow-span-two').style.display = 'none';
  document.querySelector('#waxing-arrow-span-one').style.display =
    'inline-block';
  document.querySelector('#waxing-two').style.display = 'none';
  document.querySelector('#waxing-one').style.display = 'block';
});
//nav bar function
document.querySelector('.menu-btn').addEventListener('click', function() {
  document.querySelector('.nav-control').classList.toggle('active');
});
let listRemove = document.querySelectorAll('li');
listRemove.forEach(li => {
  li.addEventListener('click', function() {
    document.querySelector('.nav-control').classList.remove('active');
  });
});
document.querySelector('#phone-number').addEventListener('click', function() {
  document.querySelector('.tell-num').innerHTML = '512-770-6007';
});
