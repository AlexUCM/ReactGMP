import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useClickOutside } from '../hooks/useClickOutside';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000e6;
  z-index: 20;
`;

const Window = styled.div`
  position: relative;
  padding: 48px;
  display: flex;
  flex-direction: column;
  width: 640px;
  border-radius: 4px;
  background-color: #141414;
`;

const CloseBtn = styled.div`
  position: absolute;
  padding: 8px;
  right: 16px;
  top: 16px;
  font-size: 40px;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
`;

const Title = styled.h1`
  font-weight: 400;
  color: #fff;
`;

export const Modal = ({ title = '', onClose, children }) => {
  const ref = useRef();
  useClickOutside(ref, onClose);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return ReactDOM.createPortal(
    <Backdrop>
      <Window ref={ref}>
        <CloseBtn onClick={() => onClose()}>&#215;</CloseBtn>
        <Title>{title}</Title>
        {children}
      </Window>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
