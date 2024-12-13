const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = async (type) => {
  const response = await fetch(`${BASE_URL}/${type}?language=ko-KR&api_key=${API_KEY}`);
  return response.json();
};

export const fetchMovieDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}?language=ko-KR&api_key=${API_KEY}`);
  return response.json();
};

