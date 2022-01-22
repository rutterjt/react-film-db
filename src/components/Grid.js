import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
  font-size: 1.25rem;
  h2 {
    color: ${({ theme }) => theme.color.gray[700]};
    margin-bottom: @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h2>{header}</h2>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;
