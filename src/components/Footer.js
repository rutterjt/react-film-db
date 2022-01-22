import React from 'react';
import styled from 'styled-components';

import Attribution from './Attribution';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.gradient.header};
  color: #fff;
  padding: 2rem 1rem;
`;

const Content = styled.footer`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  margin-right: 1rem;
  margin-bottom: 1rem;

  & a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Copyright>
          Built by{' '}
          <a
            href="https://github.com/jonrutter"
            rel="noreferrer"
            target="_blank"
          >
            Jon Rutter
          </a>
          . Copyright {new Date().getFullYear()}.
        </Copyright>
        <Attribution />
      </Content>
    </Wrapper>
  );
};

export default Footer;
