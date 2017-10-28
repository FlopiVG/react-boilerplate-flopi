import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from 'store';
import AppExample from 'containers/AppExample';

const Main = () => (
  <Provider store={store}>
    <div>
      Boilerplate App
      <button className="btn btn-primary">Button</button>
      <AppExample />
    </div>
  </Provider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#main'),
);
