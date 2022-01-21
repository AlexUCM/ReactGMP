import {
  SEARCH_MOVIE_PENDING,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_ERROR,
} from './actionTypes';
import { BASE_URL } from '../constants';

const fetchData = () => ({
  type: SEARCH_MOVIE_PENDING,
});

const fetchDataSuccess = (payload) => ({
  type: SEARCH_MOVIE_SUCCESS,
  payload,
});

const fetchDataError = (err) => ({
  type: SEARCH_MOVIE_ERROR,
  payload: err,
});

const fetchMovie = (id) => (dispatch) => {
  dispatch(fetchData());
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((movie) => dispatch(fetchDataSuccess(movie)))
    .catch((err) => dispatch(fetchDataError(err)));
};

export default fetchMovie;
