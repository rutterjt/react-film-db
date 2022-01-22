import React from 'react';

import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  border: 5px solid ${(props) => props.theme.color.gray['300']};
  border-top: 5px solid ${(props) => props.theme.color.gray['800']};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.8s linear infinite;
  margin: 20px auto;
`;

const Spinner = () => <StyledSpinner />;

export default Spinner;
