import fetchMovies from './fetchMovies';
import { BASE_URL } from '../constants';

const addMovie = (content) => (dispatch, getState) => {
  const { sortBy, filter } = getState().moviesData;

  fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
  })
    .then((res) => {
      if (res.status === 201) {
        dispatch(fetchMovies({ sortBy, filter }));
      }
    })
    .catch((err) => console.error(err));
};

export default addMovie;
