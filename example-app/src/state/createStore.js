import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer';
import rootSaga from './saga';
import initialState from './initialState';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
    sagaMiddleware,
];

const enhancers = composeEnhancers(
    applyMiddleware(...middlewares),
);

export default () => {
    const store = createStore(rootReducer, initialState, enhancers);
    sagaMiddleware.run(rootSaga);

    return store;
};