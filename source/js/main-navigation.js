// НАВИГАЦИЯ

let pageHeader = document.querySelector('.page-header');
let navLists = document.querySelector('.main-navigation__lists');
let navToggle = document.querySelector('.main-navigation__toggle');

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
