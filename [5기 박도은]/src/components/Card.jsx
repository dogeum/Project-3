import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Card = ({ movie, loading }) => {
  if (loading) {
    return (
      <div className="movie-card">
        <Skeleton height={300} />
        <Skeleton count={2} />
      </div>
    );
  }

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onError={(e) => (e.target.src = 'https://via.placeholder.com/500x750?text=No+Image')}
      />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average} ★</p>
    </div>
  );
};

export default Card;
