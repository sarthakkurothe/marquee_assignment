import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookshelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(storedBooks);
  }, []);

  return (
    <>
      <div className="navbar">
        <h1>Personal Bookshelf</h1>
        <Link to="/" className="btn">Back to Search</Link>
      </div>
      <div className="container">
        <h1>My Bookshelf</h1>
        <div className="bookshelf">
          {books.map((book, index) => (
            <div key={index} className="bookshelf-item">
              <img 
                src={book.cover_i 
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                  : 'https://via.placeholder.com/150'
                } 
                alt={book.title} 
                className="book-cover" 
              />
              <h3>{book.title}</h3>
              <p>{book.author_name && book.author_name.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookshelfPage;
