import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  position: relative;
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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ${(props) =>
    props.type === 'id' &&
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

const Error = styled.p`
  position: absolute;
  bottom: -16px;
  font-size: 12px;
  right: 0;
`;

export const Input = ({ title, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      {title}
      <StyledInput
        data-testid={props.name}
        {...field}
        {...props}
        autoComplete='off'
      />
      {meta.touched && meta.error ? (
        <Error data-testid='error'>{meta.error}</Error>
      ) : null}
    </Label>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  disabled: PropTypes.bool,
};
