import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #232323;
`;

const Headline = styled.h1`
  font-weight: 400;
  font-size: 64px;
  color: #fff;
`;

const Message = styled.p`
  padding: 8px 0 64px;
  font-size: 256px;
  line-height: 264px;
  color: #f65261;
  text-shadow: 2px 4px 3px #ffffff80;
`;

export const PageNotFound = () => (
  <Container>
    <Headline>Page Not Found</Headline>
    <Message>404</Message>
    <Link to='/'>
      <Button backToHome align='center'>
        GO BACK TO HOME
      </Button>
    </Link>
  </Container>
);
