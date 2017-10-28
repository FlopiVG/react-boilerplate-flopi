import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from 'store';
import AppExample from 'containers/AppExample';

const Main = () => (
  <Provider store={store}>
    <AppExample />
  </Provider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#main'),
);
