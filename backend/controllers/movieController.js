const {
  fetchPopularMovies,
  fetchMovieById,
  fetchMoviesBySearch,
  fetchGenres,            // new
  fetchMoviesByGenre      // new
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

// NEW: get all genres
async function getGenres(req, res) {
  try {
    const genres = await fetchGenres();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// NEW: get movies by genre id
async function getMoviesByGenre(req, res) {
  try {
    const genreId = req.params.genreId;
    const movies = await fetchMoviesByGenre(genreId);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getPopularMovies,
  getMovieById,
  searchMovies,
  getGenres,
  getMoviesByGenre,
};
