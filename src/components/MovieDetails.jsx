import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FallbackImage } from './FallbackImage';
import movie from '../mock_movie.json';
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
  font-size: 62px;
  font-weight: normal;
`;

const Raiting = styled.div`
  margin: 0 0 0 16px;
  padding: 12px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 28px;
  color: lightgreen;
`;

const RuntimeAndRelease = styled.div`
  padding: 12px 0;
  display: flex;
  font-size: 28px;
  color: #f65261;

  & p {
    margin: 0 32px 0 0;
  }
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

export const MovieDetails = () => (
  <Container>
    <FallbackImage src={movie.poster_path} />
    <Info>
      <NameAndRaiting>
        <Name>{movie.title}</Name>
        <Raiting>{movie.vote_average}</Raiting>
      </NameAndRaiting>
      <RuntimeAndRelease>
        <p>{movie.release_date.slice(0, 4)}</p>
        <p>
          {movie.runtime}
          {' min'}
        </p>
      </RuntimeAndRelease>
      <Overview>{movie.overview}</Overview>
    </Info>
    <SearchIcon>
      <FontAwesomeIcon icon={faSearch} />
    </SearchIcon>
  </Container>
);
