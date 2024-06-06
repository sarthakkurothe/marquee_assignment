import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search...Eg The Wind in the Willows"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
