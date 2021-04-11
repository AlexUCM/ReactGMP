import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { FormSelect } from './FormSelect';
import { Modal } from './Modal';
import styled from 'styled-components';

const Form = styled.form`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  color: #f65261;

  & input[type='date'] {
    color: #a9a9a9c0;
  }

  & input[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6;
    outline: none;
    filter: invert(1);

    &:hover {
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  margin: 8px 0 0 0;
  padding: 0 16px;
  background-color: #232323c9;
  border-radius: 5px;
  border-width: 0;
  font-size: 24px;
  line-height: 48px;
  color: #fff;
  outline: none;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 64px 0 0 0;

  & button[type='reset'] {
    margin: 0 16px 0 0;
  }
`;

export const AddForm = ({ onClose }) => {
  const [state, setState] = useState({
    title: '',
    release: '',
    overview: '',
    runtime: '',
    genres: [],
  });

  const { title, release, overview, runtime, genres } = state;

  const handleInputChange = (event) => {
    const { value, name, type, checked } = event.target;
    if (type !== 'checkbox') {
      setState({ ...state, [name]: value });
    } else if (checked) {
      if (genres.includes(value)) return;
      setState((state) => ({ ...state, genres: [...state.genres, value] }));
    } else {
      setState((state) => ({
        ...state,
        genres: state.genres.filter((genre) => genre !== value),
      }));
    }
  };

  return (
    <Modal title='ADD MOVIE' onClose={onClose}>
      <Form>
        <Label>
          TITLE
          <Input
            name='title'
            type='text'
            value={title}
            placeholder='Title here'
            onChange={handleInputChange}
          />
        </Label>
        <br />
        <Label>
          RELEASE DATE
          <Input
            name='release'
            type='date'
            value={release}
            style={{ color: release ? '#fff' : '' }}
            onChange={handleInputChange}
          />
        </Label>
        <br />
        <FormSelect value={genres.join(', ')} onChange={handleInputChange} />
        <br />
        <Label>
          OVERVIEW
          <Input
            name='overview'
            type='text'
            value={overview}
            placeholder='Overview here'
            onChange={handleInputChange}
          />
        </Label>
        <br />
        <Label>
          RUNTIME
          <Input
            name='runtime'
            type='text'
            value={runtime}
            placeholder='Runtime here'
            onChange={handleInputChange}
          />
        </Label>
        <Buttons>
          <Button type='reset' reset>
            RESET
          </Button>
          <Button type='submit' confirm>
            SUBMIT
          </Button>
        </Buttons>
      </Form>
    </Modal>
  );
};

AddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
