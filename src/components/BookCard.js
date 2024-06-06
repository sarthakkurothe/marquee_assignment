import React from 'react';

const BookCard = ({ book, handleAddToBookshelf }) => {
  const { title, author_name, cover_i, key } = book;
  const coverUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : 'https://via.placeholder.com/150';

  return (
    <div className="book-card">
      <img src={coverUrl} alt={title} />
      <h3>{title}</h3>
      <p>{author_name && author_name.join(', ')}</p>
      <button onClick={() => handleAddToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
