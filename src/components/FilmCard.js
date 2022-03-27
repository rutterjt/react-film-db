import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Thumb from './Thumb';

const FilmCard = ({ image, movieId, title }) => {
  return (
    <Link
      to={`/${movieId}`}
      className="block relative h-auto z-10 rounded-3xl overflow-hidden group hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
    >
      <Thumb image={image} title={title} />
      <span className="sr-only">{title}</span>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 transition-all opacity-0 group-hover:opacity-100 group-focus:opacity-100">
        <h2 className="absolute p-4 bottom-0 left-0 right-0 text-slate-50 text-center text-2xl">
          {title}
        </h2>
      </div>
    </Link>
  );
};

FilmCard.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  title: PropTypes.string,
};

FilmCard.defaultProps = {
  title: '',
};

export default FilmCard;
