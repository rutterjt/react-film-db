import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ image, title, clickable }) => (
  <img
    src={image}
    alt={`Movie thumbnail${title ? ' for ' + title : ''}`}
    className={`rounded-2xl transition-all max-w-screen-sm object-cover w-full thumb ${
      clickable && 'hover:opacity-80'
    }`}
  />
);

const Thumb = ({ image, movieId, clickable, title = '' }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image image={image} title={title} clickable={clickable} />
      </Link>
    ) : (
      <Image image={image} title={title} clickable={clickable} />
    )}
  </div>
);

export default Thumb;
