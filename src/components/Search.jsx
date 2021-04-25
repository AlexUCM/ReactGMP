import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AddForm } from './AddForm';
import { Button } from './Button';
import { SuccessMessage } from './SuccessMessage';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 216px;
`;

const SearchField = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  padding: 0 24px 0 0;
  margin: 24px 0 0 0;
  max-width: 1024px;
`;

const Input = styled.input`
  margin: 0 16px 0 0;
  width: 80%;
  height: 53px;
  padding: 0 0 0 24px;
  background-color: #232323c9;
  border-radius: 5px;
  border-width: 0;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  outline: none;

  &:placeholder {
    color: #424242;
  }
`;

export const Search = () => {
  const history = useHistory();
  const { query } = useParams();

  const [value, setValue] = useState('');
  const [{ isForm, isMessage }, setIsOpen] = useState({
    isForm: false,
    isMessage: false,
  });

  const handleChange = (event) => setValue(event.target.value);
  const onOpenModal = () => setIsOpen({ isForm: true, isMessage: false });
  const onCloseModal = (isMessage) => setIsOpen({ isForm: false, isMessage });
  const onSubmit = (event) => {
    if (value) {
      history.push(`/search/${value}`);
    } else {
      history.push(`/`);
    }
    event.preventDefault();
  };

  useEffect(() => setValue(query), []);

  return (
    <>
      <Container>
        <Button add align='flex-end' onClick={onOpenModal}>
          + ADD MOVIE
        </Button>
        <SearchField>
          <Title>FIND YOUR MOVIE</Title>
          <Form onSubmit={onSubmit}>
            <Input
              type='text'
              placeholder='What do you want to watch?'
              onChange={handleChange}
              value={value}
            />
            <Button type='submit' search>
              SEARCH
            </Button>
          </Form>
        </SearchField>
      </Container>
      {isForm && <AddForm onClose={onCloseModal} />}
      {isMessage && <SuccessMessage onClose={onCloseModal} />}
    </>
  );
};
