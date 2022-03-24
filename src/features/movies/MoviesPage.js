import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import {
  fetchMovies,
  selectMovieIds,
  selectMoviesStatus,
  selectMoviesPage,
  selectMoviesTotalPages,
} from './moviesSlice';

// components
import HeroImage from './HeroImage';
import Grid from '../../components/Grid';
import MovieThumb from './MovieThumb';
import Spinner from '../../components/Spinner';
import Searchbar from '../search/Searchbar';
import Button from '../../components/Button';
import Footer from '../../app/Footer';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
`;

const Wrapper = styled.main`
  margin-bottom: 2rem;
`;

const MoviesPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectMoviesStatus);
  const movieIds = useSelector(selectMovieIds);
  const page = useSelector(selectMoviesPage);
  const totalPages = useSelector(selectMoviesTotalPages);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  if ((status === 'loading' && !movieIds.length) || status === 'idle') {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  } else if (status === 'error') {
    return (
      <div>
        <p>Something went wrong...</p>
        <button onClick={() => dispatch(fetchMovies())}>Try Again</button>
      </div>
    );
  }

  const gridContent = movieIds.map((movieId) => (
    <MovieThumb key={movieId} movieId={movieId} />
  ));

  return (
    <>
      <Wrapper>
        <HeroImage movieId={movieIds[0]} />
        <Searchbar />
        <Grid header="Popular Movies">{gridContent}</Grid>
        {status === 'loading' && <Spinner />}
        {page < totalPages && status !== 'loading' && (
          <Button onClick={() => dispatch(fetchMovies())}>Load More</Button>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default MoviesPage;
