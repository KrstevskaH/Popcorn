// backend/controllers/movieController.js

const {
  fetchPopularMovies,
  fetchMovieById,
  fetchMoviesBySearch
} = require('../services/movieService');

async function getPopularMovies(req, res) {
  try {
    const movies = await fetchPopularMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getMovieById(req, res) {
  try {
    const movie = await fetchMovieById(req.params.id);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function searchMovies(req, res) {
  try {
    const query = req.query.q;
    const movies = await fetchMoviesBySearch(query);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getPopularMovies,
  getMovieById,
  searchMovies,
};
