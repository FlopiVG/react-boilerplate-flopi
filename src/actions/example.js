export const ACTION_TYPES = {
  FETCH_DATA: 'fetch_data',
  FETCH_DATA_SUCCESFULL: 'fetch_data_succesfull',
  FETCH_DATA_ERROR: 'fetch_data_error',
  ACTIVE_ITEM: 'active_item',
  CREATE_MODE: 'create_mode',
  CREATE_ITEM: 'create_item',
};

const PORT = process.env.PORT || 3000;

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: ACTION_TYPES.FETCH_DATA });
    const request = await fetch(`http://localhost:${PORT}/example`);
    const data = await request.json();
    dispatch({ type: ACTION_TYPES.FETCH_DATA_SUCCESFULL, payload: data });
  } catch (e) {
    dispatch({ type: ACTION_TYPES.FETCH_DATA_ERROR, payload: e.message });
  }
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

export const createItem = values => async (dispatch) => {
  const request = await fetch(`http://localhost:${PORT}/example`,
    { method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values) });
  const data = await request.json();
  dispatch({ type: ACTION_TYPES.CREATE_ITEM, payload: data });
};
