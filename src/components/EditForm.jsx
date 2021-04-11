import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { FormSelect } from './FormSelect';
import { Modal } from './Modal';
import { Input } from './Input';
import editMovie from '../redux/actions/editMovie';
import styled from 'styled-components';

const Form = styled.form`
  padding: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  color: #f65261;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 64px 0 0 0;

  & button {
    margin: 0 0 016px;
  }
`;

export const EditForm = (props) => {
  const dispatch = useDispatch();

  const initialState = {
    title: props.title,
    id: props.id,
    release_date: props.release_date,
    overview: props.overview,
    runtime: props.runtime,
    genres: props.genres,
    poster_path: props.poster_path,
  };
  const [state, setState] = useState(initialState);

  const {
    title,
    id,
    release_date,
    overview,
    runtime,
    genres,
    poster_path,
  } = state;

  const handleInput = (event) => {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: name === 'runtime' ? parseInt(value, 10) : value,
    });
  };

  const handleGenre = (event) => {
    const { value, checked } = event.target;
    return checked && !genres.includes(value)
      ? setState((state) => ({ ...state, genres: [...state.genres, value] }))
      : setState((state) => ({
          ...state,
          genres: state.genres.filter((genre) => genre !== value),
        }));
  };

  const handleReset = () => setState(initialState);

  const onSubmit = () => dispatch(editMovie(state));

  return (
    <Modal title='EDIT MOVIE' onClose={props.onClose}>
      <Form>
        <Input title='MOVIE ID' name='id' type='number' value={id} disabled />
        <Input
          title='TITLE'
          name='title'
          type='text'
          value={title}
          onChange={handleInput}
        />
        <br />
        <Input
          title='RELEASE DATE'
          name='release_date'
          type='date'
          value={release_date}
          onChange={handleInput}
        />
        <br />
        <Input
          title='POSTER PATH'
          name='poster_path'
          type='text'
          value={poster_path}
          onChange={handleInput}
        />
        <br />
        <FormSelect value={genres.join(', ')} onChange={handleGenre} />
        <br />
        <Input
          title='OVERVIEW'
          name='overview'
          type='text'
          value={overview}
          onChange={handleInput}
        />
        <br />
        <Input
          title='RUNTIME'
          name='runtime'
          type='text'
          value={runtime}
          onChange={handleInput}
        />
      </Form>
      <Buttons>
        <Button type='reset' reset onClick={handleReset}>
          RESET
        </Button>
        <Button type='submit' confirm isClose onClick={onSubmit}>
          SAVE
        </Button>
      </Buttons>
    </Modal>
  );
};

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  poster_path: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
