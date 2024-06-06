import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <h1>Personal Bookshelf</h1>
        <div className="nav-buttons">
          <Link to="/">Home</Link>
          <Link to="/bookshelf">Go to My Bookshelf</Link>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookSearchPage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
