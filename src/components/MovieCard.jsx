import React from 'react';
import PropTypes from 'prop-types';
import { FallbackImage } from './FallbackImage';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const ResultsFilter = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #232323;
`;

const Dot = styled.div`
  margin: 2px 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
`;

const Poster = styled.div`
  position: relative;
  padding-top: 148%;
  overflow: hidden;
  cursor: pointer;

  &:hover ${ResultsFilter} {
    display: flex;
  }
`;

const Movie = styled.div`
  padding: 8px 8px 0 8px;
  display: flex;
  justify-content: space-between;
  background-color: #232323;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MovieTitle = styled.h2`
  margin: 0 0 4px 0;
  font-size: 18px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: #ffffff7a;
`;

const MovieGenres = styled.p`
  font-size: 14px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: #555;
`;

const MovieDate = styled.div`
  font-size: 14px;
  margin: 5px 0 0 0;
  color: #ffffff7a;
`;

const DateString = styled.span`
  padding: 0 8px;
  border: 1px solid #555;
  border-radius: 5px;
`;

export const MovieCard = ({ title, genres, date, poster }) => {
  return (
    <Container>
      <Poster>
        <FallbackImage src={poster} />
        <ResultsFilter>
          <Dot />
          <Dot />
          <Dot />
        </ResultsFilter>
      </Poster>
      <Movie>
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieGenres>{genres}</MovieGenres>
        </MovieInfo>
        <MovieDate>
          <DateString>{date}</DateString>
        </MovieDate>
      </Movie>
    </Container>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
