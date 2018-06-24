import React, { Component } from 'react';
// Import components
import Book from './Book';
// The 'Link' component is crucial - it allows the user navigate through the app
import { Link } from 'react-router-dom';
// BooksAPI.js is a JavaScript API for the provided Udacity backend
import * as BooksAPI from '../BooksAPI';
// Install PropTypes through npm https://www.npmjs.com/package/prop-types
// It's a package that allows to specify type of each prop we pass into the component
// and also if it's required or not
import { PropTypes } from 'prop-types';

class SearchBook extends Component {
  state = {
    bookSearchResults: [],
    query: ''
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateDetails: PropTypes.func.isRequired
  };

  // Check if the book is already on the shelf.
  // (when a book is already on a bookshelf, the 'shelf' should have the
  // same value on both the main application page and the search page)
  findShelf = books => {
    for (let result of books) {
      result.shelf = 'none';
      for (let book of this.props.books) {
        if (book.id === result.id) {
          result.shelf = book.shelf;
        }
      }
    }
    return books;
  };

  // Call the 'BooksAPI.search' which resolves to a JSON object
  // containing a collection of a maximum of 20 book objects.
  // Call the 'findShelf' method
  browseBooks = query => {
    if (query.length !== 0) {
      BooksAPI.search(query, 20).then(books => {
        if (books.length > 0) {
          // books = books.filter(book => book.imageLinks);
          books = this.findShelf(books);
          this.setState({ bookSearchResults: books });
        }
      });
    }
  };

  // Show the message on the page
  notification(msg, duration) {
    let el = document.createElement('div');
    el.setAttribute(
      'style',
      `position:fixed; 
      top:50px; 
      width:100%; 
      text-align:center; 
      padding:20px; 
      background-color:white; 
      border:1px solid #888;`
    );
    el.innerHTML = msg;
    setTimeout(function() {
      el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
  }

  // Create the text of the message and call the
  // 'notification' method to show it on the page
  createNotification(bookTitle, author, shelfName) {
    let msg =
      '"' +
      bookTitle +
      '"' +
      ' by ' +
      author +
      ' has been added to the shelf: ' +
      shelfName;
    this.notification(msg, 3000);
  }

  // Collect information about the book to create a notification
  // Create the notification only if the value of the shelf doesn't
  // equal 'none'
  collectDetails(book, shelf) {
    let bookTitle = book.title;
    let author = ['Unknown author'];
    if (book.authors) {
      author = book.authors;
    }
    let shelfName = '';
    if (shelf !== 'none') {
      if (shelf === 'currentlyReading') {
        shelfName = 'Currently reading';
      } else if (shelf === 'wantToRead') {
        shelfName = 'Want to read';
      } else if (shelf === 'read') {
        shelfName = 'Read';
      }
      this.createNotification(bookTitle, author, shelfName);
    }
  }

  // Change the book's shelf and collect information about the book
  addBookToShelf = (book, shelf) => {
    this.props.onUpdateDetails(book, shelf);
    this.collectDetails(book, shelf);
  };

  // Update the 'query' state
  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* Change the <a> tag to a 'Link' component */}
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              // The value of this input field is equal to whatever 'this.state.query' is
              value={this.state.query}
              onChange={event => {
                // Whenever this input changes - update the 'query'
                this.updateQuery(event.target.value);
                // As the value of the 'query' changes - search for books
                this.browseBooks(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* When 'query' has some length - show the matching books on the page */}
            {this.state.query.length > 0 &&
              this.state.bookSearchResults.map(book => (
                <Book
                  book={book}
                  key={book.id}
                  // Change the book's shelf
                  onChangeBookDetails={shelf => {
                    this.addBookToShelf(book, shelf);
                  }}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

// Export the component (to import it inside other components)
export default SearchBook;
