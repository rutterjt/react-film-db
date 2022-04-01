// types
import type { Movie, Movies, Credits } from './types';

const BASE_URL = '/.netlify/functions/';

export const fetchMovies = async (
  page: number,
  term: string = ''
): Promise<Movies> => {
  const params: string = term ? `?term=${term}&page=${page}` : `?page=${page}`;
  const endpoint: string = BASE_URL + 'movies' + params;
  return await (await fetch(endpoint)).json();
};

export const fetchMovie = async (movieId: string): Promise<Movie> => {
  const endpoint: string = BASE_URL + `movie?movieId=${movieId}`;
  return await (await fetch(endpoint)).json();
};

export const fetchCredits = async (movieId: string): Promise<Credits> => {
  const endpoint: string = BASE_URL + `credits?movieId=${movieId}`;
  return await (await fetch(endpoint)).json();
};

// api config
const API_URL: string = 'https://api.themoviedb.org/3/';
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
// For login and voting
// const REQUEST_TOKEN_URL: string = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
// const LOGIN_URL: string = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
// const SESSION_ID_URL: string = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  // REQUEST_TOKEN_URL,
  // LOGIN_URL,
  // SESSION_ID_URL,
};
