import React from 'react';
import { MovieCard } from './MovieCard';
import { Navbar } from './Navbar';
import movies from '../mock_data.json';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  background-color: #232323;
  padding: 20px 48px 32px;
`;

const Section = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
`;

const ResutCount = styled.div`
  padding: 16px 0;
  font-size: 18px;
  color: #ffffffc2;
`;

const ResultNumber = styled.span`
  font-weight: 700;
  margin: 0 5px 0 0;
`;

export const MoviesList = () => (
  <Container>
    <Section>
      <Navbar />
      <ResutCount>
        <ResultNumber>{movies.data.length}</ResultNumber>
        <span>movies found</span>
      </ResutCount>
      <List>
        {movies.data.map(
          ({ poster_path, genres, title, release_date, vote_average, id }) => (
            <MovieCard
              poster={poster_path}
              genres={
                genres.length === 2 ? genres.join(' & ') : genres.join(', ')
              }
              title={title}
              date={release_date.slice(0, 4)}
              vote={vote_average}
              key={id}
            />
          )
        )}
      </List>
    </Section>
  </Container>
);
