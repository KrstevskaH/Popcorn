// backend/services/movieService.js

const axios = require('axios');

// Load the API key from environment variables
const TMDB_API_KEY = process.env.TMDB_API_KEY;

console.log('TMDB_API_KEY:', TMDB_API_KEY);  // For debugging, remove this later

const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchPopularMovies() {
  const url = `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data;
}

async function fetchMovieById(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}

async function fetchMoviesBySearch(query) {
  const url = `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  fetchPopularMovies,
  fetchMovieById,
  fetchMoviesBySearch,
};
