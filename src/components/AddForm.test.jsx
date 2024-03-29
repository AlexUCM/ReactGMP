import React from 'react';
import configureStore from 'redux-mock-store';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import movies from '../mockedData/mockMovies.json';
import { AddForm } from './AddForm';

const mockStore = configureStore([]);

describe('AddForm', () => {
  const store = mockStore({
    moviesData: movies,
  });
  ReactDOM.createPortal = jest.fn((element) => element);
  const getComponent = ({ onClose = jest.fn() }) =>
    render(
      <Provider store={store}>
        <AddForm onClose={onClose} />
      </Provider>
    );
  it('Should renders correctly', () => {
    expect(getComponent({}).asFragment()).toMatchSnapshot();
  });
  it('Should show validation on blur', async () => {
    const { getByTestId } = getComponent({});
    const input = getByTestId('title');
    fireEvent.blur(input);
    await waitFor(() => {
      expect(getByTestId('error')).not.toBe(null);
      expect(getByTestId('error')).toHaveTextContent('Required');
    });
  });
});
