// All the lovely javascript comes here

const currentBooks = document.querySelector('#display-book');
const addbookBtn = document.querySelector('#add-book');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookList = JSON.parse(localStorage.getItem('library')) || [];

function addBook(bookTitle, bookAuthor) {
  const book = {};
  book.title = bookTitle.value;
  book.author = bookAuthor.value;
  bookList.push(book);
}

addbookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (bookTitle.value === null || bookAuthor.value === null) {
    return;
  }
  addBook(bookTitle, bookAuthor);
  localStorage.setItem('library', JSON.stringify(bookList));
});

// function updateBookList() {
//   if (localStorage.getItem('library')) {
//     // display current books
//   }
// }
// window.onload = updateBookList;

// function displayBooks() {
//   currentBooks.innerHTML = `
//     <div>
//     <p>${bookList}</p>
//     <div>
//   `;
// }

// window.onload = displayBooks;
