import React from 'react';

// routing
import { useParams } from 'react-router-dom';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

// hook
import { useMovieFetch } from '../hooks/useMovieFetch';

// fallback image
import NoProfileImage from '../images/no_profile_picture.png';

const Movie = () => {
  // getting movieId from route params
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
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
    </>
  );
};

export default Movie;
