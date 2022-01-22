import React from 'react';
import { Link } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

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
  &:hover {
    opacity: ${(props) => (props.clickable ? '0.8' : '1')};
  }
`;

const Image = ({ image, title, clickable }) => (
  <StyledImage
    src={image}
    alt={`Movie thumbnail${title ? ' for ' + title : ''}`}
    clickable={clickable}
  />
);

const Thumb = ({ image, movieId, clickable, title = '' }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image image={image} title={title} clickable={clickable} />
      </Link>
    ) : (
      <Image image={image} title={title} />
    )}
  </div>
);

export default Thumb;
