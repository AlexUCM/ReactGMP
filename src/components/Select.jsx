import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.div`
  position: relative;
  height: 24px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0 24px;
  color: #fff;
  cursor: pointer;

  &:after {
    content: '\\25BC';
    margin: 0 0 0 10px;
    font-size: 12px;
    color: #f65261;
  }

  ${(props) =>
    props.isOpen &&
    `
    &:after {
      transform: rotate(180deg);
  }
  `}
`;

const Dropdown = styled.div`
  position: absolute;
  display: none;
  right: 0;
  top: 26px;
  padding: 8px 0;
  width: 174px;
  background-color: #232323;
  border: 1px solid #424242;
  border-radius: 4px;
  z-index: 2;

  ${(props) =>
    props.isOpen &&
    `
    display: block;
  `}
`;

const SortValue = styled.p`
  line-height: 32px;
  padding: 0 8px;

  ${(props) =>
    props.isActive &&
    `
    background-color: #f65261;
  `}
`;

export const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('RELEASE DATE');
  const sortingValues = ['RELEASE DATE', 'RATING'];

  return (
    <StyledSelect onClick={() => setIsOpen((state) => !state)} isOpen={isOpen}>
      {value}
      <Dropdown
        onClick={(event) => setValue(event.target.textContent)}
        isOpen={isOpen}
      >
        {sortingValues.map((val) => {
          return (
            <SortValue key={val} isActive={val === value}>
              {val}
            </SortValue>
          );
        })}
      </Dropdown>
    </StyledSelect>
  );
};
