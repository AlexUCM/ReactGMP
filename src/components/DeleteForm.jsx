import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Modal } from './Modal';
import deleteMovie from '../redux/actions/deleteMovie';
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

export const DeleteForm = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteMovie(id));
  return (
    <Modal title='DELETE FORM' onClose={onClose}>
      <Container>
        <Confirmation>Are you sure you want delete this movie?</Confirmation>
        <Button confirm align='right' onClick={onDelete}>
          CONFIRM
        </Button>
      </Container>
    </Modal>
  );
};

DeleteForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
