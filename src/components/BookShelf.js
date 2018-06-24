import React, { Component } from 'react';
// Import components
import Book from './Book';
// Install PropTypes through npm https://www.npmjs.com/package/prop-types
// It's a package that allows to specify type of each prop we pass into the component
// and also if it's required or not
import { PropTypes } from 'prop-types';

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onChangeDetails: PropTypes.func.isRequired
  };

  // Change the book's shelf
  updateBookDetails = (book, shelf) => {
    this.props.onChangeDetails(book, shelf);
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* 'Map' method returs a new array, it does not modify the original array */}
            {this.props.books.map(book => (
              <Book
                book={book}
                key={book.id}
                // Change the book's shelf
                onChangeBookDetails={shelf => {
                  this.updateBookDetails(book, shelf);
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
export default BookShelf;
