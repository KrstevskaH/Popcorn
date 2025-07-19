import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-900">
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
