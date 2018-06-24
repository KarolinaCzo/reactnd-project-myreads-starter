import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  // Wrap the entire <App /> in the <BrowserRouter>
  // (this sets up the Router to work with all the components)
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
