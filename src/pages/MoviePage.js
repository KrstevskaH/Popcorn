import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieById } from '../services/api';

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(id).then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p className="text-center mt-10 text-white">Loading...</p>;

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-6 relative">
      <Link
        to="/"
        className="absolute top-4 left-4 px-4 py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-gray-900 transition"
      >
        &larr; Back to home
      </Link>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mt-16">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded shadow-lg w-[400px] flex-shrink-0"
        />
        <div className="flex flex-col justify-start flex-1">
          <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
          <p className="text-lg mb-6">{movie.overview}</p>

          {/* Video player */}
          <div className="w-full aspect-video">
            <video
              controls
              src={`https://path-to-your-video-source/${movie.id}.mp4`}
              className="w-full h-full rounded shadow-lg bg-black"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
