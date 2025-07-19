const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;
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

// NEW: fetch all genres
async function fetchGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}

// NEW: fetch movies by genre id
async function fetchMoviesByGenre(genreId) {
  const url = `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  fetchPopularMovies,
  fetchMovieById,
  fetchMoviesBySearch,
  fetchGenres,
  fetchMoviesByGenre,
};
