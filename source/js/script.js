// НАВИГАЦИЯ

const pageHeader = document.querySelector('.page-header');
const navLists = document.querySelector('.main-navigation__lists');
const navToggle = document.querySelector('.main-navigation__toggle');

pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function () {
  if (navLists.classList.contains('main-navigation__lists--closed')) {
    navLists.classList.remove('main-navigation__lists--closed');
    navLists.classList.add('main-navigation__lists--opened');
    navToggle.classList.remove('main-navigation__toggle--default');
    navToggle.classList.add('main-navigation__toggle--active');
  } else {
    navLists.classList.add('main-navigation__lists--closed');
    navLists.classList.remove('main-navigation__lists--opened');
    navToggle.classList.add('main-navigation__toggle--default');
    navToggle.classList.remove('main-navigation__toggle--active');
  }
});

// СЛАЙДЕР

if(document.querySelector('.slider') !== null) {
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
}

// МОДАЛЬНОЕ ОКНО

if (document.querySelector('.modal') !== null) {
  const modal = document.querySelector('.modal');

  if (document.querySelectorAll('.modalOpen') !== null) {
    const modalOpen = document.querySelectorAll('.modalOpen');

    for (let i = 0; i < modalOpen.length; i++) {
      modalOpen[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.remove('modal--closed');
      });
    }
  }

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      modal.classList.add('modal--closed');
    }
  });
}
