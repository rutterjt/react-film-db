import React from 'react';

// routing
import { Link, useParams } from 'react-router-dom';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../api';

// components
import Layout from '../components/Layout';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import BreadCrumb from '../components/BreadCrumb';
import MovieInfo from '../components/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar';
import Actor from '../components/Actor';

// hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie: React.FC = () => {
  // getting movieId from route params
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId as string);

  console.log(movie);

  if (loading)
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen h-full">
          <Spinner />
        </div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div>
          Something went wrong. Please try going back to the{' '}
          <Link to="/" className="hover:underline focus:underline">
            home page
          </Link>
          .
        </div>
      </Layout>
    );

  return (
    <Layout title={movie.title}>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid title="Cast">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : ''
            }
          />
        ))}
      </Grid>
    </Layout>
  );
};

export default Movie;
