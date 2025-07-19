// backend/routes/movieRoutes.js

const express = require('express');
const router = express.Router();

const {
  getPopularMovies,
  getMovieById,
  searchMovies
} = require('../controllers/movieController');

// GET /api/movies - get popular movies
router.get('/', getPopularMovies);

// GET /api/movies/:id - get movie details by id
router.get('/:id', getMovieById);

// GET /api/movies/search/query?q=keyword - search movies
router.get('/search/query', searchMovies);

module.exports = router;
