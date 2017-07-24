import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';

import store from 'store';
// import ExampleList from 'containers/ExampleList';
// import ExampleItem from 'containers/ExampleItem';

// import Wrapper from './wrapper';
import AppExample from 'containers/AppExample';

const Main = () => (
  <Provider store={store}>
    <div>
      Boilerplate App
      <AppExample />
      {/* <BrowserRouter>
        <Wrapper>
          <ExampleList />
          <Route exact path="/item/:id" component={ExampleItem} />
        </Wrapper>
      </BrowserRouter>*/ }
    </div>
  </Provider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#main'),
);
