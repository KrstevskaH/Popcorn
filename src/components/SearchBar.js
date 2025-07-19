// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-6">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0a7 7 0 11-9.9-9.9 7 7 0 019.9 9.9z" />
        </svg>
      </div>
    </form>
  );
}

export default SearchBar;
