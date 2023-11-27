// МОДАЛЬНОЕ ОКНО

const modalOpen = document.querySelectorAll('.modalOpen');
const modal = document.querySelector('.modal');

modalOpen.forEach((button) => {
    button.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--closed');
  });
});


document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    modal.classList.add('modal--closed');
  }
});
