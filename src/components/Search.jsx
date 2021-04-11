import React, { useState } from 'react';
import { AddForm } from './AddForm';
import { Button } from './Button';
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
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = (event) => {
    if (event.target.dataset.close) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Container>
        <Button add align='flex-end' onClick={onOpenModal}>
          + ADD MOVIE
        </Button>
        <SearchField>
          <Title>FIND YOUR MOVIE</Title>
          <Form>
            <Input type='text' placeholder='What do you want to watch?' />
            <Button search>SEARCH</Button>
          </Form>
        </SearchField>
      </Container>
      {isOpen && <AddForm onClose={onCloseModal} />}
    </>
  );
};
