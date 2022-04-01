import React from 'react';

// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../api';

// components
import Thumb from './Thumb';

// fallback image
import NoImage from '../images/no_image.jpg';

// types
import { MovieState } from '../types';

type Props = {
  movie: MovieState;
};

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const bgStyle = movie.backdrop_path
    ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}) center/cover`
    : '#162032';
  return (
    <div style={{ background: bgStyle }} className="py-10 px-6 animate-fadeIn">
      <div className="block md:flex max-w-site-content mx-auto bg-slate-900/80 rounded-3xl">
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          title={movie.title}
        />
        <div className="w-full py-5 px-6 md:px-10 text-slate-50 overflow-hidden">
          <h1 className="text-2xl md:text-3xl mb-4">{movie.title}</h1>
          <div className="mb-4">
            <h2 className="text-xl mb-2 font-bold">Plot</h2>
            <p className="max-w-prose">{movie.overview}</p>
          </div>
          <div className="flex flex-start space-x-8">
            <section>
              <h2 className="text-lg mb-2">Rating</h2>
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-50 text-slate-900 font-extrabold">
                {movie.vote_average}
              </div>
            </section>
            <section>
              <h2 className="text-lg mb-2">
                Director{movie.directors.length > 1 ? 's' : ''}
              </h2>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
