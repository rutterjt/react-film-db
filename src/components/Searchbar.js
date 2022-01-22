import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

// icon
import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: ${(props) => props.theme.gradient.searchBar};
  padding: 0 20px;
`;

const Content = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  height: 55px;
  background: ${(props) => props.theme.color.gray[700]};
  margin: 0 auto;
  border-radius: 40px;
  color: #fff;
`;

const Input = styled.input`
  font-size: var(--fontBig);
  position: absolute;
  left: 0;
  margin: 8px 0;
  padding: 0 0 0 60px;
  border: 0;
  width: 95%;
  background: transparent;
  height: 40px;
  color: var(--white);
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  font-size: 1.5;
`;

const Searchbar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timeout = setTimeout(() => {
      setSearchTerm(input);
    }, 500);
    return () => clearTimeout(timeout);
  }, [setSearchTerm, input]);

  const handle = (setter) => (e) => setter(e.currentTarget.value);

  return (
    <Wrapper>
      <Content>
        <Input
          type="text"
          placeholder="Search for movies"
          onChange={handle(setInput)}
          value={input}
        />
        <SearchIcon />
      </Content>
    </Wrapper>
  );
};

export default Searchbar;
