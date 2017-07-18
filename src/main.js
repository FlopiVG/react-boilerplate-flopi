import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';

const Main = (props) => {
    return (
        <Provider store={ store }>
            <div>Boilerplate App</div>
        </Provider>
    )
};
ReactDOM.render(
    <Main />,
    document.querySelector('#main')
)