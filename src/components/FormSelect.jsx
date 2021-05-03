import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useClickOutside } from '../hooks/useClickOutside';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: 8px 0 0 0;
`;

const Select = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #232323c9;
  border-radius: 5px;
  font-size: 24px;
  line-height: 48px;
  cursor: pointer;
`;

const Value = styled.p`
  color: #fff;
  text-transform: capitalize;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  user-select: none;

  ${({ value }) =>
    !value &&
    `
    color: #a9a9a9c0;
  `}
`;

const Arrow = styled.div`
  color: #f65261;
  font-size: 16px;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(180deg);
  `}
`;

const Dropdown = styled.div`
  position: absolute;
  display: none;
  left: 0;
  top: 50px;
  width: 100%;
  max-height: 210px;
  overflow-y: scroll;
  border-radius: 5px;
  background-color: #232323;
  z-index: 50;

  ${({ isOpen }) =>
    isOpen &&
    `
    display: block;
  `}
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 22px;
  line-height: 42px;
  color: #fff;
`;

const Input = styled.input`
  display: none;

  &:checked + label {
    color: #fff;
  }

  &:checked + label::before {
    border-color: #f65261;
    background-color: #f65261;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  color: #a9a9a9c0;

  &:before {
    content: '';
    width: 14px;
    height: 14px;
    border: 1px solid #adb5bd;
    border-radius: 4px;
    margin: 0 8px 0 12px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 75% 75%;
    background-color: #fff;
  }

  & span {
    text-transform: capitalize;
  }
`;

const genres = [
  'action',
  'adventure',
  'animation',
  'comedy',
  'crime',
  'documentary',
  'drama',
  'family',
  'fantasy',
  'history',
  'horror',
  'music',
  'mystery',
  'romance',
  'science fiction',
  'thriller',
  'war',
  'western',
];

export const FormSelect = ({ name, value, onChange }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <>
      <span>GENRE</span>
      <Container ref={ref}>
        <Select onClick={() => setIsOpen((state) => !state)}>
          <Value value={value}>{value || 'Select genre'}</Value>
          <Arrow isOpen={isOpen}>&#9660;</Arrow>
        </Select>
        <Dropdown data-testid='dropdown' isOpen={isOpen}>
          {genres.map((genre) => (
            <InputWrapper key={genre}>
              <Input
                id={genre}
                name={name}
                type='checkbox'
                checked={value.split(', ').includes(genre)}
                value={genre}
                onChange={onChange}
              />
              <Label htmlFor={genre}>
                <span>{genre}</span>
              </Label>
            </InputWrapper>
          ))}
        </Dropdown>
      </Container>
    </>
  );
};

FormSelect.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
