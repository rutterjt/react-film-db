import { configureStore } from '@reduxjs/toolkit';

// reducers
import moviesReducer from '../features/movies/moviesSlice';
import movieReducer from '../features/movie/movieSlice';
import searchReducer from '../features/search/searchSlice.';

const reducer = {
  movies: moviesReducer,
  movie: movieReducer,
  search: searchReducer,
};

export default configureStore({ reducer });
