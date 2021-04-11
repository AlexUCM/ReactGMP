import React, { useState, useCallback } from 'react';
import { MovieCard } from './MovieCard';
import { Navbar } from './Navbar';
import { EditForm } from './EditForm';
import { DeleteForm } from './DeleteForm';
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

export const MoviesList = () => {
  const [{ isOpen, status, movieData }, setMovie] = useState({
    isOpen: false,
    status: null,
    movieData: {},
  });

  const onCloseModal = useCallback(
    (event) => {
      if (event.target.dataset.close) {
        setMovie((state) => ({ ...state, isOpen: false }));
      }
    },
    [isOpen]
  );

  const getMovie = (id, status, isOpen) => {
    setMovie({
      status,
      isOpen,
      movieData: movies.data.find((movie) => movie.id === id),
    });
  };

  return (
    <Container>
      <Section>
        <Navbar />
        <ResutCount>
          <ResultNumber>{movies.data.length}</ResultNumber>
          <span>movies found</span>
        </ResutCount>
        <List>
          {movies.data.map((movie) => (
            <MovieCard
              poster={movie.poster_path}
              genres={
                movie.genres.length === 2
                  ? movie.genres.join(' & ')
                  : movie.genres.join(', ')
              }
              title={movie.title}
              date={movie.release_date.slice(0, 4)}
              vote={movie.vote_average}
              overview={movie.overview}
              runtime={movie.runtime}
              id={movie.id}
              key={movie.id}
              getMovie={getMovie}
            />
          ))}
          {status === 'Edit' && isOpen && (
            <EditForm
              onClose={onCloseModal}
              genres={movieData.genres.map((genre) => genre.toLowerCase())}
              title={movieData.title}
              id={movieData.id}
              release={movieData.release_date}
              overview={movieData.overview}
              runtime={movieData.runtime}
            />
          )}
          {status === 'Delete' && isOpen && (
            <DeleteForm onClose={onCloseModal} />
          )}
        </List>
      </Section>
    </Container>
  );
};
