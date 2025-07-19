import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="max-w-xs bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-white text-xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-gray-400 text-sm">{movie.release_date}</p>
      </div>
    </div>
  );
}
export default MovieCard;
