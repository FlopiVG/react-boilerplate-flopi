import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'get_data',
  FETCH_DATA_SUCCESFULL: 'fetch_data_succesfull',
  FETCH_DATA_ERROR: 'fetch_data_error',
};

const PORT = process.env.PORT || 3000;

export const getData = () => (dispatch) => {
  const request = axios(`http://localhost:${PORT}/api/example`);
  dispatch({ type: ACTION_TYPES.FETCH_DATA });
  request
  .then((response) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: response.data });
  })
  .catch((error) => {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error.message });
  });
};
