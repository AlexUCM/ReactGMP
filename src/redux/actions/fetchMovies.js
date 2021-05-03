import {
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from './actionTypes';
import { BASE_URL } from '../constants';
import { getSortQuery, getFilterQuery } from '../../utils/helpers';

const fetchData = () => ({
  type: SEARCH_MOVIES_PENDING,
});

const fetchDataSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload,
});

const fetchDataError = () => ({
  type: SEARCH_MOVIES_ERROR,
});

const fetchMovies = ({ sortBy = '', filter = '', search = '' }) => (
  dispatch
) => {
  dispatch(fetchData());
  return fetch(
    `${BASE_URL}?searchBy=title&sortOrder=desc&limit=360&filter=${getFilterQuery(
      filter
    )}&sortBy=${getSortQuery(sortBy)}&search=${search}`
  )
    .then((res) => res.json())
    .then((movies) =>
      dispatch(fetchDataSuccess({ data: movies.data, sortBy, filter }))
    )
    .catch(() => dispatch(fetchDataError()));
};

export default fetchMovies;
