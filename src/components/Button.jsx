import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 18px;
  border: none;
  border-radius: 4px;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
  align-self: ${(props) => props.align || 'flex-start'};

  &:active {
    opacity: 0.95;
  }

  ${(props) =>
    props.add &&
    `
    width: 160px;
    padding: 10px 0;
    background-color: #55555585;
    color: #f65261;
  `}

  ${(props) =>
    props.search &&
    `
    width: 220px;
    padding: 16px 0;
    background-color: #f65261;
    color: #fff;
  `}
`;

export const Button = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

Button.propTypes = {
  align: PropTypes.string,
  add: PropTypes.bool,
  search: PropTypes.bool,
  children: PropTypes.node.isRequired,
};