let prev = document.querySelector('.slider__arrow.slider__arrow_prev');
let next = document.querySelector('.slider__arrow.slider__arrow_next');
let slides = document.getElementsByClassName('slider__item');
let slidesArr = Array.from(slides);
let sliderDots = document.getElementsByClassName('slider__dot');
sliderDots[0].classList.add('slider__dot_active');

function setActive(number) {
  slides[number].classList.add('slider__item_active');
  sliderDots[number].classList.add('slider__dot_active');
}

function removeActive(number) {
  slides[number].classList.remove('slider__item_active');
  sliderDots[number].classList.remove('slider__dot_active');
}

next.onclick = function() {
  let index = slidesArr.findIndex((item) => item.classList.contains('slider__item_active'));
  removeActive(index);
  if (index < slides.length - 1) {
    setActive(index + 1);
  } else {
    setActive(0);
    }
  }

prev.onclick = function() {
  let index = slidesArr.findIndex((item) => item.classList.contains('slider__item_active'));
  removeActive(index);
  if (index > 0) {
    setActive(index - 1);
  } else {
    setActive(slides.length - 1);
    }
  }

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = function() {
    let index = slidesArr.findIndex((item) => item.classList.contains('slider__item_active'));
    removeActive(index);
    setActive(i);
  }
}
