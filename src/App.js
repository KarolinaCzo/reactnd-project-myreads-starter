import React from 'react';
// Import components
import ListBooks from './components/ListBooks';
import SearchBook from './components/SearchBook';
// Install React Router through npm https://www.npmjs.com/package/react-router
// (remember to add it it index.js also)
import { Route } from 'react-router-dom';
// BooksAPI.js is a JavaScript API provided by Udacity
import * as BooksAPI from './BooksAPI';
// Add css
import './App.css';

class BooksApp extends React.Component {
  state = {
    // 'books' array holds the information about the books from 'BooksAPI'
    books: []
  };

  // Make an AJAX request to the 'BooksAPI'
  componentDidMount() {
    this.requestBookInfo();
  }

  // Get back the information about the books from 'BooksAPI' and add it to the empty 'books' array
  requestBookInfo = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  // Make a request to update the book details
  updateBookDetails = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.requestBookInfo();
    });
  };

  render() {
    return (
      // Wrap JSX elements in an enclosing tag
      // (in this case <div> wit a className 'app')
      <div className="app">
        {/* Add the 'Route' - it renders some UI when a location matches the route's path 
       (it basically allows to hide/show components; don't forget to add 'exact' to the 'path') */}
        <Route
          exact
          path="/"
          render={() => (
            // The 'ListBooks' component shows all the chosen books and displays them on shelves
            <ListBooks
              // If we want to use a prop in a component, we need to pass it to this component
              books={this.state.books}
              onUpdateDetails={this.updateBookDetails}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            // The 'SearchBook' component has a search input section
            <SearchBook
              books={this.state.books}
              onUpdateDetails={this.updateBookDetails}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
