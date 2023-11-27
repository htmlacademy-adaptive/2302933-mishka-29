// СЛАЙДЕР

const slides = document.querySelectorAll('.slider__body');
const buttonPrevious = document.querySelector('.slider__button--previous');
const buttonNext = document.querySelector('.slider__button--next');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.slider__body--active').classList.remove('slider__body--active');
};

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('slider__body--active');
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }

  slides[counter].classList.add('slider__body--active');
});
