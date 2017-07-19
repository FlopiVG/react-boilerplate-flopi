import { ACTION_TYPES } from 'actions/example';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { data: action.payload, loading: false, error: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { data: [], loading: false, error: action.payload };
    default:
      return state;
  }
}
