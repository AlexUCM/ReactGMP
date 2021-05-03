import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { FormSelect } from './FormSelect';

describe('FormSelect', () => {
  const getComponent = ({
    value = '',
    name = 'genres',
    onChange = jest.fn(),
  }) => render(<FormSelect value={value} name={name} onChange={onChange} />);
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot();
  });
  it('Should open dropdown', () => {
    const { getByText, getByTestId } = getComponent({});
    const select = getByText('Select genre');
    const dropdown = getByTestId('dropdown');
    fireEvent.click(select);
    expect(dropdown).toHaveStyle('display: block');
  });
  it('Should close dropdown', () => {
    const { getByText, getByTestId } = getComponent({});
    const select = getByText('Select genre');
    const dropdown = getByTestId('dropdown');
    fireEvent.click(select);
    fireEvent.click(document);
    expect(dropdown).toHaveStyle('display: none');
  });
  it('Should call onChange', () => {
    const onChange = jest.fn();
    const { getByText, getByLabelText } = getComponent({ onChange });
    const select = getByText('Select genre');
    const checkbox = getByLabelText('comedy');
    fireEvent.click(select);
    fireEvent.click(checkbox);
    expect(onChange).toBeCalled();
  });
});
