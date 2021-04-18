import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FallbackImage } from './FallbackImage';
import { CardMenu } from './CardMenu';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Menu = styled.div`
  display: none;

  ${(props) =>
    props.isOpen &&
    `
    display: block;
  `}
`;

const Poster = styled.div`
  position: relative;
  padding-top: 148%;
  overflow: hidden;
  cursor: pointer;

  &:hover ${Menu} {
    display: block;
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
`;

const MovieTitle = styled.h2`
  margin: 0 0 4px 0;
  font-size: 18px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #ffffff7a;
`;

const MovieGenres = styled.p`
  font-size: 14px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
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

export const MovieCard = ({
  title,
  genres,
  date,
  poster,
  id,
  getMovie,
  handleMovieDet,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((state) => !state);

  const onOpenModal = (event) => {
    getMovie(id, event.target.innerHTML, true);
    setIsOpen((state) => !state);
  };

  return (
    <Container>
      <Poster onClick={() => handleMovieDet(id)}>
        <FallbackImage src={poster} />
        <Menu isOpen={isOpen}>
          <CardMenu
            isOpen={isOpen}
            onOpenModal={onOpenModal}
            toggleMenu={toggleMenu}
          />
        </Menu>
      </Poster>
      <Movie>
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieGenres>
            {genres.length === 2 ? genres.join(' & ') : genres.join(', ')}
          </MovieGenres>
        </MovieInfo>
        <MovieDate>
          <DateString>{date.slice(0, 4)}</DateString>
        </MovieDate>
      </Movie>
    </Container>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  poster: PropTypes.string,
  id: PropTypes.number.isRequired,
  getMovie: PropTypes.func.isRequired,
  handleMovieDet: PropTypes.func.isRequired,
};
