import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  const getComponent = ({ onClick = jest.fn() }) =>
    render(<Button onClick={onClick}>Test Button</Button>);
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot();
  });
  it('onClick have been called', () => {
    const click = jest.fn();
    const { getByText } = getComponent({ onClick: click });
    expect(getByText('Test Button')).toBeTruthy();
    fireEvent.click(getByText('Test Button'));
    expect(click).toBeCalled();
  });
});
