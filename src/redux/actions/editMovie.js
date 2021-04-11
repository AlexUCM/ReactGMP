import fetchMovies from './fetchMovies';
import { BASE_URL } from '../constants';

const editMovie = (content) => (dispatch, getState) => {
  const { sortBy, filter } = getState().moviesData;

  fetch(`${BASE_URL}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(fetchMovies({ sortBy, filter }));
      }
    })
    .catch((err) => console.log(err));
};

export default editMovie;
