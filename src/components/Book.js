import React, { Component } from 'react';
// Install PropTypes through npm https://www.npmjs.com/package/prop-types
// It's a package that allows to specify type of each prop we pass into the component
// and also if it's required or not
import { PropTypes } from 'prop-types';
import coverPlaceholder from '../icons/cover-placeholder.png';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeBookDetails: PropTypes.func.isRequired
  };

  // Change the book's shelf
  swapBookshelf = event => {
    this.props.onChangeBookDetails(event.target.value);
  };

  render() {
    // It the book has a cover - show the cover thumbnail
    // else - show the cover placeholder
    let thumbnail = coverPlaceholder;
    if (this.props.book.imageLinks) {
      thumbnail = this.props.book.imageLinks.thumbnail;
    }

    // If the book's author is known - show the author's name
    // else the author is an 'Unknown author'
    let authors = ['Unknown author'];
    if (this.props.book.authors) {
      authors = this.props.book.authors;
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={this.props.book.shelf}
                // Change the book's shelf
                onChange={this.swapBookshelf}
              >
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}

// Export the component (to import it inside other components)
export default Book;
