import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { fetchPopularMovies, searchMovies } from '../services/api';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies().then(data => {
      setMovies(data.results);
      setLoading(false);
    });
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    if (query) {
      const data = await searchMovies(query);
      setMovies(data.results);
    } else {
      const data = await fetchPopularMovies();
      setMovies(data.results);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-900 text-white p-4 shadow-md">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
    <h1 className="text-3xl font-bold tracking-wide">
      🍿 Popcorn Time
    </h1>
    <SearchBar onSearch={handleSearch} />
  </div>
</div>

      {/* Movie List Section */}
      <div className="p-4">
        {loading ? <p className="text-center text-lg">Loading...</p> : <MovieList movies={movies} />}
      </div>
    </div>
  );
}

export default Home;
