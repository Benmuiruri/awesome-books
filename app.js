/* eslint-disable */
import UI from './modules/update-ui.js';
import Store from './modules/store-book.js';
import Time from './modules/display-date.js';

const displayBooks = document.getElementById('display-book-link');
const addBook = document.getElementById('add-new-book-link');
const contact = document.getElementById('contact-link');
const addBookSection = document.getElementById('add-book');
const displayBooksSection = document.getElementById('book-library');
const contactSection = document.getElementById('contact');

displayBooks.addEventListener('click', () => {
  displayBooksSection.classList.remove('hide-content');
  addBookSection.classList.add('hide-content');
  contactSection.classList.add('hide-content');
  contactSection.classList.remove('d-flex', 'flex-column', 'align-items-center');
});
addBook.addEventListener('click', () => {
  addBookSection.classList.remove('hide-content');
  contactSection.classList.add('hide-content');
  contactSection.classList.remove('d-flex', 'flex-column', 'align-items-center');
  displayBooksSection.classList.add('hide-content');
});
contact.addEventListener('click', () => {
  contactSection.classList.remove('hide-content');
  contactSection.classList.add('d-flex', 'flex-column', 'align-items-center');
  displayBooksSection.classList.add('hide-content');
  addBookSection.classList.add('hide-content');
});
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form value
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // validate input
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instantiate Book
    const book = new Book(title, author, isbn);

    // Update UI with new book
    UI.addBookToList(book);

    // Add book to local storage

    Store.addBook(book);

    // Show success message
    UI.showAlert('Book Successfully added', 'success');

    //clear input field

    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  //Remove from UI
  UI.deleteBook(e.target);

  // Remove Book from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Book Successfully deleted', 'success');
});

Time();
