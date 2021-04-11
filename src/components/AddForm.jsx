import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { FormSelect } from './FormSelect';
import { Modal } from './Modal';
import { Input } from './Input';
import addMovie from '../redux/actions/addMovie';
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
    margin: 0 0 0 16px;
  }
`;

export const AddForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const initialState = {
    title: '',
    release_date: '',
    overview: '',
    runtime: '',
    genres: [],
    poster_path: '',
  };

  const [state, setState] = useState(initialState);

  const { title, release_date, overview, runtime, genres, poster_path } = state;

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
  const onSubmit = () => dispatch(addMovie(state));

  return (
    <Modal title='ADD MOVIE' onClose={onClose}>
      <Form>
        <Input
          title='TITLE'
          name='title'
          type='text'
          value={title}
          placeholder='Title here'
          onChange={handleInput}
        />
        <br />
        <Input
          title='RELEASE DATE'
          name='release_date'
          type='date'
          value={release_date}
          style={{ color: release_date ? '#fff' : '#a9a9a9c0' }}
          onChange={handleInput}
        />
        <br />
        <Input
          title='POSTER PATH'
          name='poster_path'
          type='text'
          value={poster_path}
          placeholder='Poster URL here'
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
          placeholder='Overview here'
          onChange={handleInput}
        />
        <br />
        <Input
          title='RUNTIME'
          name='runtime'
          type='text'
          value={runtime}
          placeholder='Runtime here'
          onChange={handleInput}
        />
      </Form>
      <Buttons>
        <Button type='reset' reset onClick={handleReset}>
          RESET
        </Button>
        <Button type='submit' confirm isClose onClick={onSubmit}>
          SUBMIT
        </Button>
      </Buttons>
    </Modal>
  );
};

AddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
