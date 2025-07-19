const express = require('express');
const router = express.Router();

const {
  getPopularMovies,
  getMovieById,
  searchMovies,
  getGenres,
  getMoviesByGenre
} = require('../controllers/movieController');

router.get('/', getPopularMovies);
router.get('/:id', getMovieById);
router.get('/search/query', searchMovies);

// NEW:
router.get('/genres', getGenres);
router.get('/genre/:genreId', getMoviesByGenre);

module.exports = router;
