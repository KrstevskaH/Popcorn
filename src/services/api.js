const API_BASE = 'http://localhost:5000/api/movies';

export async function fetchPopularMovies() {
  const res = await fetch(`${API_BASE}`);
  return res.json();
}

export async function fetchMovieById(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
}

export async function searchMovies(query) {
  const res = await fetch(`${API_BASE}/search/query?q=${encodeURIComponent(query)}`);
  return res.json();
}
