import React, { useState, useEffect } from 'react';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  const handleRemoveFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(
      (book) => book.key !== bookToRemove.key
    );
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.map((book) => (
          <div key={book.key} className="bookshelf-item">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
            <button onClick={() => handleRemoveFromBookshelf(book)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
