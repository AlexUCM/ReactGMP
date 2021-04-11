import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useClickOutside } from '../hooks/useClickOutside';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #232323;
`;

const Dot = styled.div`
  margin: 2px 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 5px 0;
  width: 60%;
  position: absolute;
  top: 12px;
  right: 8px;
  background-color: #232323;
  border-radius: 5px;
  color: #fff;
  z-index: 10;
`;

const Item = styled.div`
  line-height: 32px;
  padding: 0 0 0 22px;

  &:hover {
    background-color: #f65261;
  }
`;

const Close = styled.div`
  align-self: flex-end;
  padding: 5px;
  line-height: 12px;
  text-align: right;
  font-size: 24px;
`;

export const CardMenu = ({ isOpen, toggleMenu, onOpenModal }) => {
  const ref = useRef();
  useClickOutside(ref, () => isOpen && toggleMenu());
  return (
    <>
      <Menu onClick={toggleMenu}>
        <Dot />
        <Dot />
        <Dot />
      </Menu>
      {isOpen && (
        <Dropdown ref={ref}>
          <Close onClick={toggleMenu}>&#215;</Close>
          <Item onClick={onOpenModal}>Edit</Item>
          <Item onClick={onOpenModal}>Delete</Item>
        </Dropdown>
      )}
    </>
  );
};

CardMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
