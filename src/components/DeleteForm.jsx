import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Modal } from './Modal';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 0 0;
`;

const Confirmation = styled.p`
  color: #fff;
  font-size: 18px;
  margin: 0 0 32px 0;
`;

export const DeleteForm = ({ onClose }) => (
  <Modal title='DELETE FORM' onClose={onClose}>
    <Container>
      <Confirmation>Are you sure you want delete this movie?</Confirmation>
      <Button confirm align='right'>
        CONFIRM
      </Button>
    </Container>
  </Modal>
);

DeleteForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
