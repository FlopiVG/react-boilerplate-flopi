import axios from 'axios';

export const ACTION_TYPES = {
  FETCH_DATA: 'fetch_data',
  FETCH_DATA_SUCCESFULL: 'fetch_data_succesfull',
  FETCH_DATA_ERROR: 'fetch_data_error',
  ACTIVE_ITEM: 'active_item',
  CREATE_MODE: 'create_mode',
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

export const getItem = id => (dispatch, getState) => {
  const { example: { data, activeItem } } = getState();
  const itemToActive = data.filter(item => item.id === +id)[0];

  if (activeItem.id === itemToActive.id) {
    dispatch({ type: ACTION_TYPES.ACTIVE_ITEM, payload: false });
  } else if (itemToActive) {
    dispatch({ type: ACTION_TYPES.ACTIVE_ITEM, payload: itemToActive });
  }
};

export const activeCreateMode = active => (dispatch) => {
  dispatch({ type: ACTION_TYPES.CREATE_MODE, payload: active });
};
