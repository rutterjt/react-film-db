import React from 'react';
import PropTypes from 'prop-types';

const Thumb = ({ image, movieId, title }) => {
  return (
    <div>
      <img
        src={image}
        title={title}
        alt={`Movie thumbnail${title ? ' for ' + title : ''}`}
        className={`animate-fadeIn w-full max-w-[720px] object-cover rounded-3xl`}
      />
    </div>
  );
};

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.string,
  title: PropTypes.string,
};

Thumb.defaultProps = {
  title: '',
};

export default Thumb;
