// All the lovely javascript comes here

const addbookBtn = document.querySelector('#add-book');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookList = JSON.parse(localStorage.getItem('book-library')) || [];

const displayBook = (book) => {
  const {
    title,
    author,
  } = book;

  const bookContainer = document.createElement('div');
  bookContainer.className = 'book';
  bookContainer.innerHTML = `
    <p>${title}</p>
    <p>${author} </p>
    <button class="delete">Delete Book</button>
    <hr class="line-break">
  `;

  return bookContainer;
};

const displayBooks = () => {
  const currentBooks = document.querySelector('#books-list');
  const libraryContainer = document.createElement('div');

  bookList.forEach((book) => {
    libraryContainer.appendChild(displayBook(book));
    currentBooks.appendChild(libraryContainer);
  });
};

window.onload = displayBooks;

const addBook = (bookTitle, bookAuthor) => {
  const book = {};
  book.title = bookTitle.value;
  book.author = bookAuthor.value;
  bookList.push(book);
  displayBooks();
};

addbookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (bookTitle.value === null || bookAuthor.value === null) {
    return;
  }
  addBook(bookTitle, bookAuthor);
  localStorage.setItem('book-library', JSON.stringify(bookList));
});
