import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { client } from '../../mocks/client';

const moviesAdapter = createEntityAdapter({
  selectId: (movie) => movie.id,
});

const initialState = moviesAdapter.getInitialState({
  status: 'idle',
  error: null,
  page: 0,
  totalPages: 0,
});

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, thunkAPI) => {
    return new Promise((resolve, reject) => {
      let pageNumber = thunkAPI.getState().movies.page;
      try {
        client
          .get(`/movies?page=${pageNumber + 1}`)
          .then((response) => resolve(response.data))
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.page = action.payload.page;
        state.totalPages = action.payload.total_pages;
        moviesAdapter.addMany(state, action.payload.results);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;

export const { selectIds: selectMovieIds, selectById: selectMovieById } =
  moviesAdapter.getSelectors((state) => state.movies);

export const selectMoviesStatus = (state) => state.movies.status;
export const selectMoviesPage = (state) => state.movies.page;
export const selectMoviesTotalPages = (state) => state.movies.totalPages;
