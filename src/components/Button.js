import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.color.gray[800]};
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  margin: 1rem auto;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ text, callback }) => (
  <StyledButton onClick={callback}>{text}</StyledButton>
);

export default Button;
