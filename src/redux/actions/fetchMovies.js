import {
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from './actionTypes';
import { BASE_URL } from '../constants';

const fetchData = () => ({
  type: SEARCH_MOVIES_PENDING,
});

const fetchDataSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
});

const fetchDataError = (err) => ({
  type: SEARCH_MOVIES_ERROR,
  payload: err,
});

const fetchMovies = ({ sortBy = '', filter = '', search = '' }) => (
  dispatch
) => {
  dispatch(fetchData());
  fetch(
    `${BASE_URL}?searchBy=title&sortOrder=desc&limit=360&filter=${filter}&sortBy=${sortBy}&search=${search}`
  )
    .then((res) => res.json())
    .then((movies) =>
      dispatch(fetchDataSuccess({ data: movies.data, sortBy, filter, search }))
    )
    .catch((err) => dispatch(fetchDataError(err)));
};

export default fetchMovies;
