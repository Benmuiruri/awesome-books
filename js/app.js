// Book Class: Represents a Book

/* eslint-disable */
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.id = isbn;
  }
}

// UI Class: Handle UI
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'Ben Kiarie',
        isbn: '1234',
      },
      {
        title: 'Book Two',
        author: 'Monica Kiarie',
        isbn: '3241',
      },
    ];

    const books = StoredBooks;

    // Loop through the stored books array and call a method to it.
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store Class: Handles book storage

// Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => {

  e.preventDefault();
  // get form value 
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Instantiate Book 
  const book = new Book(title, author, isbn);

  // Update UI with new book 
  UI.addBookToList(book);

  //clear input field

  UI.clearFields();

});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});