import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// logo
import Logo from '../images/rfdb-logo.svg';
import TMDBLogo from '../images/tmdb_logo.svg';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.gradient.header};
  padding: 0 20px;
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 100%;
  max-width: 120px;
  height: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 140px;
  }
`;

const TMDBLogoImg = styled.img`
  width: 100%;
  max-width: 80px;
  height: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 100px;
  }
`;

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={Logo} alt="React Film DB Logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="TMDB Logo" />
    </Content>
  </Wrapper>
);

export default Header;
