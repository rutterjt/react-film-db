import React from 'react';

import styled from 'styled-components';

// fallback image
import NoImage from '../images/no_profile_picture.png';

const Wrapper = styled.section`
  color: #fff;
  background: ${({ theme }) => theme.color.gray[800]};
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
    font-weight: bold;
    font-size: 1.25rem;
  }
  p {
    margin: 5px 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl || NoImage} alt={`Thumbnail of ${name}`} />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

export default Actor;
