import React, { useState, useEffect } from 'react';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query === '') {
        setBooks([]);
        return;
      }
      setLoading(true);
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      const data = await response.json();
      setBooks(data.docs);
      setLoading(false);
    };

    const delayDebounceFn = setTimeout(() => {
      fetchBooks();
    }, 300); 

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleAddToBookshelf = (book) => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    const updatedBooks = [...storedBooks, book];
    localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
  };

  return (
    <div>
      <h1>Search Books</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Eg... The Wind in the Willows"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {loading && (
        <div className="loading-bar"></div>
      )}
      <div className="book-list">
        {books.map((book) => (
          <div key={book.key} className="book-card">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
            <button onClick={() => handleAddToBookshelf(book)}>
              Add to Bookshelf
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
