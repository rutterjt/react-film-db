import React from 'react';
import styled from 'styled-components';

// routing
import { Link, useParams } from 'react-router-dom';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import Footer from './Footer';

// hook
import { useMovieFetch } from '../hooks/useMovieFetch';

// fallback image
import NoProfileImage from '../images/no_profile_picture.png';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
`;

const UnderlineLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const Movie = () => {
  // getting movieId from route params
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);

  if (loading)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  if (error)
    return (
      <div>
        Something went wrong. Please try going back to the{' '}
        <UnderlineLink to="/">home page</UnderlineLink>.
      </div>
    );

  return (
    <>
      <main>
        <BreadCrumb movieTitle={movie.title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        <Grid header="Cast">
          {movie.actors.map((actor) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoProfileImage
              }
            />
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  );
};

export default Movie;
