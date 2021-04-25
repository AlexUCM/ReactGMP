import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from './MovieCard';
import { Navbar } from './Navbar';
import { EditForm } from './EditForm';
import { DeleteForm } from './DeleteForm';
import { ScrollToTop } from './ScrollToTop';
import { Loading } from './Loading';
import fetchMovies from '../redux/actions/fetchMovies';
import fetchMovie from '../redux/actions/fetchMovie';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  background-color: #232323;
  padding: 20px 48px 32px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
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

const NotFound = styled.p`
  font-size: 56px;
  align-self: center;
  color: #ffffffc2;
`;

export const getSortQuery = (str) => {
  switch (str) {
    case 'RELEASE DATE':
      return 'release_date';
    case 'RATING':
      return 'vote_average';
    default:
      return '';
  }
};

export const MoviesList = () => {
  const navGenres = {
    all: 'all',
    documentary: 'documentary',
    comedy: 'comedy',
    horror: 'horror',
    crime: 'crime',
  };

  const sortingValues = { RELEASE_DATE: 'RELEASE DATE', RATING: 'RATING' };

  const dispatch = useDispatch();
  const [genreValue, setGenreValue] = useState(navGenres.all);
  const [sortValue, setSortValue] = useState(sortingValues.RELEASE_DATE);
  const { movies, search, isLoading } = useSelector(
    (state) => state.moviesData
  );
  const [{ isOpen, status, movieData }, setMovie] = useState({
    isOpen: false,
    status: null,
    movieData: {},
  });

  const toggleSortValue = (event) => setSortValue(event.target.textContent);
  const handleMenu = (genre) => setGenreValue(genre);
  const onCloseModal = useCallback(
    () => setMovie((state) => ({ ...state, isOpen: false })),
    [isOpen]
  );

  const getMovie = (id, status, isOpen) => {
    setMovie({
      status,
      isOpen,
      movieData: movies.find((movie) => movie.id === id),
    });
  };

  useEffect(() => {
    dispatch(
      fetchMovies({
        filter: genreValue === navGenres.all ? '' : genreValue,
        sortBy: getSortQuery(sortValue),
        search,
      })
    );
  }, [genreValue, sortValue]);

  const handleMovieDetails = (id) => dispatch(fetchMovie(id));

  return (
    <Container>
      <Section>
        <Navbar
          toggleSortValue={toggleSortValue}
          handleMenu={handleMenu}
          genreValue={genreValue}
          sortValue={sortValue}
        />
        <ResutCount>
          <ResultNumber>{movies.length}</ResultNumber>
          <span>movies found</span>
        </ResutCount>
        <List>
          {movies.map((movie) => (
            <MovieCard
              poster={movie.poster_path}
              genres={movie.genres}
              title={movie.title}
              date={movie.release_date.slice(0, 4)}
              vote={movie.vote_average}
              overview={movie.overview}
              runtime={movie.runtime}
              id={movie.id}
              key={movie.id}
              getMovie={getMovie}
              handleMovieDetails={handleMovieDetails}
            />
          ))}
          {status === 'Edit' && isOpen && (
            <EditForm
              onClose={onCloseModal}
              genres={movieData.genres}
              title={movieData.title}
              id={movieData.id}
              release_date={movieData.release_date}
              overview={movieData.overview}
              runtime={movieData.runtime}
              poster_path={movieData.poster_path}
              vote_average={movieData.vote_average}
              vote_count={movieData.vote_count}
            />
          )}
          {status === 'Delete' && isOpen && (
            <DeleteForm id={movieData.id} onClose={onCloseModal} />
          )}
        </List>
        {!movies.length && <NotFound>Movies not found</NotFound>}
        {isLoading && <Loading />}
      </Section>
      <ScrollToTop />
    </Container>
  );
};
