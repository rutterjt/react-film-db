import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../app/config';

import { selectMovieById } from './moviesSlice';

const animateHeroImage = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), ${({ theme }) => theme.color.gray[800]};
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: ${animateHeroImage} 1s;
`;

const Content = styled.div`
  padding: 20px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Text = styled.div`
  z-index: 5;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: #fff;

  & h1 {
    font-size: 2rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 100%;
  }
`;

const HeroImage = ({ movieId }) => {
  const movie = useSelector((state) => selectMovieById(state, movieId));
  const { backdrop_path: backdrop, title, overview } = movie;

  const image = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}`;

  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{overview}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
