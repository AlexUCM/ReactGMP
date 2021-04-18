import fetchMovies from './fetchMovies';
import { BASE_URL } from '../constants';

const deleteMovie = (id) => (dispatch, getState) => {
  const { sortBy, filter } = getState().moviesData;

  fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    .then((res) => {
      if (res.status === 204) {
        dispatch(fetchMovies({ sortBy, filter }));
      }
    })
    .catch((err) => console.log(err));
};

export default deleteMovie;
