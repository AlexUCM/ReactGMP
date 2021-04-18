import React from 'react';
import PropTypes from 'prop-types';
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

export const Navbar = ({
  genreValue,
  sortValue,
  toggleSortValue,
  handleMenu,
}) => {
  const navGenres = {
    all: 'all',
    documentary: 'documentary',
    comedy: 'comedy',
    horror: 'horror',
    crime: 'crime',
  };

  return (
    <Container>
      <Genres>
        {Object.values(navGenres).map((genre) => {
          const isActive = genreValue === genre;
          return (
            <GenreItem
              isActive={isActive}
              onClick={() => handleMenu(genre)}
              key={genre}
            >
              {genre}
            </GenreItem>
          );
        })}
      </Genres>
      <Sort>
        <SortBy>SORT BY</SortBy>
        <Select value={sortValue} toggleSortValue={toggleSortValue} />
      </Sort>
    </Container>
  );
};

Navbar.propTypes = {
  genreValue: PropTypes.string.isRequired,
  sortValue: PropTypes.string.isRequired,
  toggleSortValue: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
};
