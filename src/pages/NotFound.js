import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
  & a:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => (
  <Wrapper>
    404: Not found. Please return to the <Link to="/">home page</Link>.
  </Wrapper>
);

export default NotFound;
