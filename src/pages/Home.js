import React from 'react';
import styled from 'styled-components';

// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

// images
import NoImage from '../images/no_image.jpg';

// hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// components
import HeroImage from '../components/HeroImage';
import Grid from '../components/Grid';
import Thumb from '../components/Thumb';
import Spinner from '../components/Spinner';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import Footer from '../components/Footer';

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

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
    initialLoad,
  } = useHomeFetch();
  const { results: movies } = state;

  if (error) return <div>Something went wrong ...</div>;
  if (initialLoad)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );

  return (
    <>
      <Wrapper>
        {!searchTerm && movies[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies[0].backdrop_path}`}
            title={movies[0].title}
            text={movies[0].overview}
          />
        ) : null}
        <Searchbar setSearchTerm={setSearchTerm} />
        <Grid title={searchTerm ? 'Search Results' : 'Popular Movies'}>
          {movies.map((movie) => {
            return (
              <Thumb
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
                title={movie.title}
              />
            );
          })}
        </Grid>
        <div className="mt-8 max-w-site-content mx-auto flex justify-center items-center">
          {loading && <Spinner />}
          {state.page < state.total_pages && !loading && (
            <Button text="Load More" onClick={() => setIsLoadingMore(true)} />
          )}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
