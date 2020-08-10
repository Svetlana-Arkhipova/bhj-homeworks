let bookFontSize = document.querySelectorAll('.book__control_font-size > a.font-size');
let bookFontSizeArr = Array.from(bookFontSize);
let book = document.getElementById('book');

bookFontSizeArr.forEach((item, i) => {
  item.addEventListener('click', () => {
    let index = bookFontSizeArr.findIndex((item) => item.classList.contains('font-size_active'));
    bookFontSize[index].classList.remove('font-size_active');
    item.classList.add('font-size_active');
    fontSize = item.dataset.size;
    switch (fontSize) {
      case 'small':
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
        break;
      case 'big':
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
        break;
      case undefined:
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
        break;
    }
    event.preventDefault();
  });
});
