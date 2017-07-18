import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import ExampleData from 'containers/ExampleData';

const Main = () => (
  <Provider store={store}>
    <div>
      Boilerplate App
      <ExampleData />
    </div>
  </Provider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#main'),
);
