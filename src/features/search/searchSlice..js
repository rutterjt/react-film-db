import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { client } from '../../mocks/client';

const searchAdapter = createEntityAdapter();

const initialState = searchAdapter.getInitialState({
  status: 'idle',
  error: null,
  page: 0,
});

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async (query, thunkAPI) => {
    return new Promise((resolve, reject) => {
      let pageNumber = thunkAPI.getState().search.page;
      try {
        client
          .get(`/movies?term=${query}&page=${pageNumber + 1}`)
          .then((response) => resolve(response.data))
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSearch.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.page = action.payload.data.page;
        searchAdapter.addMany(state, action.payload.data.results);
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;

export const { selectIds: selectMovieIds, selectById: selectMovieById } =
  searchAdapter.getSelectors((state) => state.search);
