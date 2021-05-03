import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
  const getComponent = ({
    value = 'RELEASE DATE',
    toggleSortValue = jest.fn(),
  }) => render(<Select value={value} toggleSortValue={toggleSortValue} />);
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot();
  });
  it('Dropdown should be visible', () => {
    const { getByTestId } = getComponent({});
    expect(getByTestId('dropdown')).toHaveStyle('display: none');
    fireEvent.click(getByTestId('select'));
    expect(getByTestId('dropdown')).toHaveStyle('display: block');
    fireEvent.click(document);
    expect(getByTestId('dropdown')).toHaveStyle('display: none');
  });
});
