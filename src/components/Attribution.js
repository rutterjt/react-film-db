import React from 'react';

import styled from 'styled-components';

import TMDBLogo from '../images/tmdb_logo-full.svg';

const Wrapper = styled.div`
  max-width: 300px;
  display: flex;
  align-items: center;
`;

const TMDBLogoImg = styled.img`
  width: 100%;
  max-width: 80px;
  height: auto;
  margin-right: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 100px;
  }
`;

const Attribution = () => {
  return (
    <Wrapper>
      <TMDBLogoImg src={TMDBLogo} alt="The Movie Database logo" />
      <p>
        This website uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </Wrapper>
  );
};

export default Attribution;
