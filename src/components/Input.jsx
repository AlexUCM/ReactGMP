import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin: 8px 0 0 0;
  padding: 0 16px;
  background-color: #232323c9;
  border-radius: 5px;
  border-width: 0;
  font-size: 24px;
  line-height: 48px;
  color: #fff;
  outline: none;

  ${(props) =>
    props.type === 'number' &&
    `
    padding: 0;
    margin: 0;
    background-color: #141414;
  `}

  ${(props) =>
    props.type === 'date' &&
    `
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      opacity: 0.6;
      outline: none;
      filter: invert(1);

      &:hover {
        opacity: 1;
      }
    }
  `}
`;

export const Input = ({
  title,
  name,
  type,
  value = '',
  onChange,
  placeholder = '',
  style = {},
  disabled = false,
}) => (
  <Label>
    {title}
    <StyledInput
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      style={style}
      onChange={onChange}
      autoComplete='off'
    />
  </Label>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
