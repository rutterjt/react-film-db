const BASE_URL = '/.netlify/functions/';

export const fetchMovies = async (page, term = '') => {
  const params = term ? `?term=${term}&page=${page}` : `?page=${page}`;
  const endpoint = BASE_URL + 'movies' + params;
  return await (await fetch(endpoint)).json();
};

export const fetchMovie = async (movieId) => {
  const endpoint = BASE_URL + `movie?movieId=${movieId}`;
  return await (await fetch(endpoint)).json();
};

export const fetchCredits = async (movieId) => {
  const endpoint = BASE_URL + `credits?movieId=${movieId}`;
  return await (await fetch(endpoint)).json();
};
