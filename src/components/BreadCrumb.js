import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.color.gray[700]};
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 20px;
  gap: 1rem;
  font-size: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 1.25rem;
  }
`;

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">Home</Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;
