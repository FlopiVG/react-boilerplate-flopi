import { ACTION_TYPES } from 'actions/example';

const INITIAL_STATE = {
  data: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_DATA:
      return { data: action.payload };
    default:
      return state;
  }
}
