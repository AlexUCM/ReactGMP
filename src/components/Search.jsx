import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 216px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: #fff;
  padding: 0 0 32px;
`;

const Form = styled.form`
  display: flex;
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

export const Search = () => (
  <Container>
    <Title>FIND YOUR MOVIE</Title>
    <Form>
      <Input type='text' placeholder='What do you want to watch?' />
      <Button search align='flex-end'>
        SEARCH
      </Button>
    </Form>
  </Container>
);
