const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
  localStorage.setItem('modalClicked', 'true');
  modal.classList.remove('modal_active');
});
if (!Boolean(localStorage.getItem('modalClicked'))) {
  modal.classList.add('modal_active');
}
