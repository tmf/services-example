import { spawn } from 'redux-saga/effects';
import { saga as exampleApiSaga } from 'example-api-connector';

export default function* rootSaga() {
    yield spawn(exampleApiSaga);
}