import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from 'reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

export default createStoreWithMiddleware(
  reducers,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);
