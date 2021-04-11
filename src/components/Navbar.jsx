import React, { useState } from 'react';
import { Select } from './Select';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #555;
  }
`;

const Sort = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SortBy = styled.span`
  color: #ffffff80;
`;

const Genres = styled.div`
  display: flex;
  text-transform: uppercase;
  color: #fff;
`;

const GenreItem = styled.div`
  position: relative;
  margin: 0 10px;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 0;
  }

  ${(props) =>
    props.isActive &&
    `
    &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #f65261;
    z-index: 1;
  }
  `}
`;

const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];

export const Navbar = () => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <Genres>
        {genres.map((genre, i) => {
          const isActive = active === i;
          return (
            <GenreItem
              isActive={isActive}
              onClick={() => setActive(i)}
              key={genre}
            >
              {genre}
            </GenreItem>
          );
        })}
      </Genres>
      <Sort>
        <SortBy>SORT BY</SortBy>
        <Select />
      </Sort>
    </Container>
  );
};
