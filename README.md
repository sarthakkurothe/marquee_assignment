# Personal Bookshelf

## Overview

Personal Bookshelf is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf. The application uses localStorage to store the user's bookshelf persistently across sessions.

## Features

- **Book Search Page:** Users can search for books in real-time as they type. The search results are fetched from the Open Library API and displayed as a list of cards.
- **Personal Bookshelf Page:** Users can add books from the search results to their personal bookshelf. The bookshelf is stored in the browser's localStorage, ensuring persistence across sessions.
- **Responsive Design:** The application is designed to be responsive and visually appealing, with a gradient background and modern UI components.

## Tech Stack

- **React**: Front-end library for building user interfaces.
- **React Router**: Library for handling routing in the application.
- **CSS**: Styling the application, with a focus on aesthetics and user experience.
- **Open Library API**: API used to fetch book data based on user search queries.
- **LocalStorage**: Web Storage API to persistently store the user's bookshelf.

## Setup and Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/personal-bookshelf.git
   cd personal-bookshelf
   
2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm start
   
4. **Open the application in your browser:**
Navigate to http://localhost:3000 to view the application.

## Project Structure

The project is structured as follows:
```bash
personal-bookshelf/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── SearchBar.js
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── BookSearchPage.js
│   │   ├── BookshelfPage.js
│   │   └── ...
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
│
└── package.json
