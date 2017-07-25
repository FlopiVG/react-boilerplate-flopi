import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import exampleReducer from './example';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  example: exampleReducer,
  form: formReducer,
});

export default rootReducer;
