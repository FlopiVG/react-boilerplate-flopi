import { ACTION_TYPES } from 'actions/example';

const INITIAL_STATE = {
  data: [],
  activeItem: false,
  loading: false,
  error: false,
  createMode: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...state, loading: true };
    case ACTION_TYPES.FETCH_DATA_SUCCESFULL:
      return { ...state, data: action.payload, loading: false };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTION_TYPES.ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };
    case ACTION_TYPES.CREATE_MODE:
      return { ...state, createMode: action.payload };
    default:
      return state;
  }
}
