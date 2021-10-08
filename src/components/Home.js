import React from 'react';

// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

// images
import NoImage from '../images/no_image.jpg';

// hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import Searchbar from './Searchbar';
import Button from './Button';
import Footer from './Footer';

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
      <div className="min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <main className="mb-16">
        {!searchTerm && movies[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies[0].backdrop_path}`}
            title={movies[0].title}
            text={movies[0].overview}
          />
        ) : null}
        <Searchbar setSearchTerm={setSearchTerm} />
        <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
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
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (
          <Button text="Load More" callback={() => setIsLoadingMore(true)} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
