# MyReads Project

## Table of Contents

- Basic information
- Instructions
- Helpful information

## Basic information

### Name

MyReads: A Book Tracking App

### Project Overview

A project made during the Udacity Front-End Web Developer Nanodegree.
For this project, my role was to create a bookshelf app that allows to select and categorize books I have read, am currently reading, or want to read.
I was working on a starter template that provided me with a static CSS and HTML markup, but without any of the React code that was needed to complete the project. For this project, my role was to add interactivity to the app by refactoring the static code in the provided template.

The template provided me with the following files:

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── BooksAPI.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js
```

You can view the start repository [here](https://github.com/udacity/reactnd-project-myreads-starter).
The project was evaluated by a Udacity code reviewer according to the [MyReads: A Book Tracking App project rubric](https://review.udacity.com/#!/rubrics/918/view).

### Description

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.
The main page also has a link to /search, a search page that allows you to find books to add to your library.
The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

## Instructions

Steps to view the project:

1.  Fork and clone this repository.
2.  From inside the new directory:

- open the terminal
- install all project dependencies with `npm install`
- start the development server with `npm start` (the website should open in your browser at `http://localhost:3000/`)

## Helpful information

Links to the resources I used in my project that could be helpful for other developers:

- React JS course at Udacity
  https://eu.udacity.com/course/react-nanodegree--nd019

- React Docs
  https://reactjs.org/

- how to call multiple functions on onClick in ReactJS
  https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs/26069299

- how to show a message that will disappear after some time
  https://stackoverflow.com/questions/15466802/how-can-i-auto-hide-alert-box-after-it-showing-it
