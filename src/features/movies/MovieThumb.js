import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

import { selectMovieById } from './moviesSlice';

import NoImage from '../../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../app/config';

const animateThumb = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledImage = styled.img`
  animation: ${animateThumb} 1s;
  width: 100%;
  max-width: 720px;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const Image = ({ image, title }) => (
  <StyledImage
    src={image}
    alt={`Movie thumbnail${title ? ' for ' + title : ''}`}
  />
);

const MovieThumb = ({ movieId }) => {
  const movie = useSelector((state) => selectMovieById(state, movieId));
  const { poster_path, title } = movie;
  const image = poster_path
    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
    : NoImage;

  return (
    <div>
      <Link to={`/${movieId}`}>
        <Image image={image} title={title} />
      </Link>
    </div>
  );
};

export default MovieThumb;
