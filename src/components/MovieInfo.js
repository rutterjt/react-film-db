import React from 'react';

// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

// components
import Thumb from './Thumb';

// fallback image
import NoImage from '../images/no_image.jpg';

const MovieInfo = ({ movie }) => {
  const src = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`;
  let wrapperStyle;

  if (movie.backdrop_path) {
    wrapperStyle = {
      backgroundImage: `url("${src}")`,
    };
  } else {
    wrapperStyle = {
      backgroundColor: '#111928',
    };
  }

  return (
    <div className="movie-backdrop px-5 py-10" style={wrapperStyle}>
      <div className="movie-backdrop-overlay block max-w-screen-xl mx-auto rounded-2xl md:flex text-white">
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          title={movie.title}
        />
        <article className="text-white w-full px-10 py-5 overflow-hidden">
          <h1 className="text-2xl md:text-3xl mb-4">{movie.title}</h1>
          <section className="mb-4">
            <h2 className="text-xl mb-2">Plot</h2>
            <p>{movie.overview}</p>
          </section>
          <div className="flex justify-start">
            <section>
              <h2 className="mb-2">Rating</h2>
              <div className="flex items-center justify-center w-9 h-9 bg-white text-gray-900 font-bold rounded-full">
                {movie.vote_average}
              </div>
            </section>
            <section className="ml-10">
              <h2 className="mb-2">
                Director{movie.directors.length > 1 ? 's' : ''}
              </h2>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MovieInfo;
