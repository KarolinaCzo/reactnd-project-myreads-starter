import React, { Component } from 'react';
// Import components
import BookShelf from './BookShelf';
// The 'Link' component is crucial - it allows the user navigate through the app
import { Link } from 'react-router-dom';
// Install PropTypes through npm https://www.npmjs.com/package/prop-types
// It's a package that allows to specify type of each prop we pass into the component
// and also if it's required or not
import { PropTypes } from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateDetails: PropTypes.func.isRequired
  };

  //'render' property is the only property of a component
  // that always needs to be specified - it's required!
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              // Function passed to 'filter' is used as a test
              // - only items in the array that pass the test
              // are included in the new array
              books={this.props.books.filter(
                book => book.shelf === 'currentlyReading'
              )}
              title="Currently Reading"
              onChangeDetails={this.props.onUpdateDetails}
            />

            <BookShelf
              books={this.props.books.filter(book => book.shelf === 'read')}
              title="Read"
              onChangeDetails={this.props.onUpdateDetails}
            />
            <BookShelf
              books={this.props.books.filter(
                book => book.shelf === 'wantToRead'
              )}
              title="Want to Read"
              onChangeDetails={this.props.onUpdateDetails}
            />
          </div>
        </div>
        <div className="open-search">
          {/* Change the <a> tag to a 'Link' component */}
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

// Export the component (to import it inside other components)
export default ListBooks;
