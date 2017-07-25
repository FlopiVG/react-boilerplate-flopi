import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import AppExample from 'containers/AppExample';

const Main = () => (
  <Provider store={store}>
    <div>
      Boilerplate App
      <AppExample />
    </div>
  </Provider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#main'),
);
