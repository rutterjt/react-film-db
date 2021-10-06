import React from 'react';

// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

// images
import NoImage from '../images/no_image.jpg';

// hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// components
import HeroImage from './HeroImage';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  const { results: movies } = state;
  console.log(movies);

  return (
    <>
      {movies[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies[0].backdrop_path}`}
          title={movies[0].title}
          text={movies[0].overview}
        />
      )}
    </>
  );
};

export default Home;
