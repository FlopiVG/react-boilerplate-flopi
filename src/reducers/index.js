import { combineReducers } from 'redux';
import exampleReducer from './example';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  example: exampleReducer,
});

export default rootReducer;
