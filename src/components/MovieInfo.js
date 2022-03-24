import React from 'react';

import styled from 'styled-components';

// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../app/config';

// components
import Thumb from './Thumb';

// fallback image
import NoImage from '../images/no_image.jpg';

const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    max-height: none;
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: #fff;
  overflow: hidden;

  & h1 {
    font-size: 1.5rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
      font-size: 2.5rem;
    }
  }

  & h2 {
    margin-bottom: 0.5rem;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: #fff;
  color: #000;
  font-weight: 800;
  border-radius: 50%;
  margin: 0;
`;

const Plot = styled.div`
  margin-bottom: 1rem;
`;

const MovieInfo = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          title={movie.title}
        />
        <Body>
          <h1>{movie.title}</h1>
          <Plot>
            <h2>Plot</h2>
            <p>{movie.overview}</p>
          </Plot>
          <Details>
            <section>
              <h2>Rating</h2>
              <Rating>{movie.vote_average}</Rating>
            </section>
            <section>
              <h2>Director{movie.directors.length > 1 ? 's' : ''}</h2>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </section>
          </Details>
        </Body>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
