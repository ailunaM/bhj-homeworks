const fontSize = Array.from(document.getElementsByClassName('font-size'));
const book = Array.from(document.getElementsByClassName('book'))[0];
fontSize.forEach((A, i) => {
  A.addEventListener('click', (e) => {
    e.preventDefault();
    let data = A.getAttribute('data-size');
    fontSize.forEach((element) => {
        element.classList.remove('font-size_active')
    })
    if (data === 'small') {
      A.classList.add('font-size_active');
      book.classList.add('book_fs-small');
    } else if (data === 'big') {
      A.classList.add('font-size_active');
      book.classList.add('book_fs-big');
    } else {
      A.classList.add('font-size_active');
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big');
    }
  });
});
