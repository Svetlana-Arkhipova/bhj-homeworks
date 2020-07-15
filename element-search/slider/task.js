let prev = document.querySelector('.slider__arrow.slider__arrow_prev');
let next = document.querySelector('.slider__arrow.slider__arrow_next');
let slides = document.getElementsByClassName('slider__item')
let sliderDots = document.getElementsByClassName('slider__dot');
sliderDots[0].classList.add('slider__dot_active');

next.onclick = function() {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('slider__item_active') && i < slides.length - 1) {
      slides[i].classList.remove('slider__item_active');
      slides[i+1].classList.add('slider__item_active');
      sliderDots[i].classList.remove('slider__dot_active');
      sliderDots[i+1].classList.add('slider__dot_active');
      break;
    } else if (i === slides.length - 1) {
      slides[i].classList.remove('slider__item_active');
      slides[0].classList.add('slider__item_active');
      sliderDots[i].classList.remove('slider__dot_active');
      sliderDots[0].classList.add('slider__dot_active');
    }
  }
}

prev.onclick = function() {
  for (let i = slides.length - 1; i >= 0; i--) {
    if (slides[i].classList.contains('slider__item_active') && i > 0) {
      slides[i].classList.remove('slider__item_active');
      slides[i-1].classList.add('slider__item_active');
      sliderDots[i].classList.remove('slider__dot_active');
      sliderDots[i-1].classList.add('slider__dot_active');
      break;
    } else if (i === 0) {
      slides[i].classList.remove('slider__item_active');
      slides[slides.length-1].classList.add('slider__item_active');
      sliderDots[i].classList.remove('slider__dot_active');
      sliderDots[slides.length-1].classList.add('slider__dot_active');
    }
  }
}

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = function() {
    for (let j = 0; j < sliderDots.length; j++) {
      slides[j].classList.remove('slider__item_active');
      sliderDots[j].classList.remove('slider__dot_active');
    }
    slides[i].classList.add('slider__item_active');
    sliderDots[i].classList.add('slider__dot_active');
  }
}
