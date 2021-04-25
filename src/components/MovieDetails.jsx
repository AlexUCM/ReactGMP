import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FallbackImage } from './FallbackImage';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 60px 0 60px 56px;
  display: flex;
  width: 100%;

  & img {
    position: static;
    min-width: auto;
    width: 270px;
    height: 340px;
  }
`;

const Info = styled.div`
  margin: 0 0 0 64px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const NameAndRaiting = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 44px;
  font-weight: normal;
`;

const Rating = styled.div`
  margin: 0 0 0 16px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 28px;
  color: lightgreen;

  ${(props) =>
    props.rating &&
    `
    display: none;
  `}
`;

const RuntimeAndRelease = styled.div`
  padding: 12px 0;
  display: flex;
  font-size: 28px;
  color: #f65261;
`;

const ReleaseDate = styled.div`
  margin: 0 32px 0 0;
`;
const Runtime = styled.div`
  margin: 0 32px 0 0;

  ${(props) =>
    props.runtime &&
    `
    display: none;
  `}
`;

const Overview = styled.p`
  padding: 0 64px 0 0;
  font-size: 20px;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: #f65261;
  font-size: 24px;
  transform: rotate(90deg);
  cursor: pointer;
`;

export const MovieDetails = () => {
  const { movie } = useSelector((state) => state.movieData);

  return (
    <Container>
      <FallbackImage src={movie.poster_path} />
      <Info>
        <NameAndRaiting>
          <Name>{movie.title}</Name>
          <Rating rating={!movie.rating}>{movie.vote_average}</Rating>
        </NameAndRaiting>
        <RuntimeAndRelease>
          <ReleaseDate>{movie.release_date.slice(0, 4)}</ReleaseDate>
          <Runtime runtime={!movie.runtime}>
            {movie.runtime}
            {' min'}
          </Runtime>
        </RuntimeAndRelease>
        <Overview>{movie.overview}</Overview>
      </Info>
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </Container>
  );
};
