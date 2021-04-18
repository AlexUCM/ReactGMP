import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';
import styled from 'styled-components';
import success from '../images/fallback-image.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Headline = styled.h1`
  padding: 32px 0;
  font-size: 36px;
`;

const Message = styled.p`
  padding: 0 148px;
  text-align: center;
  font-size: 20px;
`;

const Image = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #f65261;
  background-image: url(${success});
  background-size: 50% 50%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SuccessMessage = ({ onClose }) => (
  <Modal onClose={onClose}>
    <Container>
      <Image />
      <Headline>CONGRATULATIONS !</Headline>
      <Message>The movie has been added to database successfully</Message>
    </Container>
  </Modal>
);

SuccessMessage.propTypes = {
  onClose: PropTypes.func.isRequired,
};
