import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../utils/api';
import Card from '../components/Card';

const Movies = () => {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(type);
      setMovies(data.results || []);
      setLoading(false);
    };
    loadMovies();
  }, [type]);

  return (
    <div className="movies">
      <h1>{type.toUpperCase()} Movies</h1>
      <div className="movies-grid">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => <Card key={index} loading />)
        ) : (
          movies.map((movie) => <Card key={movie.id} movie={movie} loading={false} />)
        )}
      </div>
    </div>
  );
};

export default Movies;
