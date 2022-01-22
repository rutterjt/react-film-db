import React from 'react';
import styled from 'styled-components';

// helpers
import { calcTime, convertMoney } from '../helpers';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background-color: ${(props) => props.theme.color.gray[800]};
  color: #fff;
  padding: 0 1.5rem;
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    display: flex;
    gap: 20px;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.gray[700]};
  border-radius: 0.5rem;
  flex: 1;
  padding: 1rem 0;
  margin: 1rem 0;
  @media screen and (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin: 0;
  }
`;

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <Column>Running time: {calcTime(time)}</Column>
      <Column>Budget: {convertMoney(budget)}</Column>
      <Column>Revenue: {convertMoney(revenue)}</Column>
    </Content>
  </Wrapper>
);

export default MovieInfoBar;
