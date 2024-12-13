import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchMovies } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies('popular'); // Popular 영화를 로드
      setMovies(data.results || []);
    };
    loadMovies();
  }, []);

  return (
    <div className="home">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        onClickItem={(index) => navigate(`/movie/${movies[index]?.id}`)}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h2>{movie.title}</h2>
              <p className="movie-release">Release Date: {movie.release_date}</p>
              <p className="movie-rating">Rating: {movie.vote_average} ★</p>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
