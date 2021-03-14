import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 56px;
  background-color: #424242;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 20px;
  color: #f65261;
`;

export const Footer = () => (
  <Container>
    <Title>
      <b>netflix</b>
      roulette
    </Title>
  </Container>
);
