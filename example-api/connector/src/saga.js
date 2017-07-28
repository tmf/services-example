import { call, put, takeLatest, takeEvery, all, select } from 'redux-saga/effects';
import API from './api';
import {
    addTodoSucceeded,
    addTodoFailed,
    toggleTodoSucceeded,
    toggleTodoFailed,
    fetchTodosSucceeded,
    fetchTodosFailed,
    ActionTypes,
} from './actions';

function* apiFetchTodos() {
    try {
        const todos = yield call(API.fetchTodos);

        yield put(fetchTodosSucceeded(todos));
    } catch (e) {
        yield put(fetchTodosFailed(e.message));
    }
}

function* apiAddTodo({ text }) {
    try {
        const completed = false;
        const todo = yield call(API.addTodo, { text, completed });

        yield put(addTodoSucceeded(todo));
    } catch (e) {
        yield put(addTodoFailed(e.message, text));
    }
}

function* apiToggleTodo({ id }) {
    try {
        const { text, completed } = yield select((state) => state.todos.find((todo) => todo.id === id));
        const todo = yield call(API.toggleTodo, { id, text, completed });

        yield put(toggleTodoSucceeded(todo));
    } catch (e) {
        yield put(toggleTodoFailed(e.message, id ));
    }
}

function* watchFetchTodos() {
    yield takeLatest(ActionTypes.FETCH_TODOS, apiFetchTodos)
}

function* watchAddTodo() {
    yield takeEvery(ActionTypes.ADD_TODO, apiAddTodo)
}

function* watchToggleTodo() {
    yield takeEvery(ActionTypes.TOGGLE_TODO, apiToggleTodo)
}

export default function* watchMany() {
    yield all([
        call(watchFetchTodos),
        call(watchAddTodo),
        call(watchToggleTodo),
    ])
}