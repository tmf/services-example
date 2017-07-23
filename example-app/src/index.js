import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createStore from './state/createStore';
import App from './containers/App';

import './index.css';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
