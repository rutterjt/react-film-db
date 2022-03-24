import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../mocks/client';

const initialState = {
  status: 'idle',
  error: null,
  id: null,
  credits: null,
  details: null,
};

export const fetchMovie = createAsyncThunk(
  'movie/fetchMovie',
  async (movieId) => {
    return new Promise((resolve, reject) => {
      try {
        Promise.all(
          client.get(`/movie/${movieId}`),
          client.get(`/credits/${movieId}`)
        ).then((values) => {
          resolve({ details: values[0], credits: values[1] }).catch((err) =>
            reject(err)
          );
        });
      } catch (err) {
        reject(err);
      }
    });
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovie.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.page = action.payload.page;
        state.id = action.payload.details.id;
        state.details = action.payload.details;
        state.credits = action.payload.credits;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
