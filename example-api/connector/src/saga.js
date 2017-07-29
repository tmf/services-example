import { call, put, takeLatest, takeEvery, all, select } from 'redux-saga/effects';
import API from './api';
import storage from './storage';
import {
    addTodoSucceeded,
    addTodoFailed,
    toggleTodoSucceeded,
    toggleTodoFailed,
    fetchTodosSucceeded,
    fetchTodosFailed,
    loadTodosSucceeded,
    ActionTypes,
} from './actions';

function* storageFetchTodos() {
    const todos = yield call(storage.loadTodos);

    yield put(loadTodosSucceeded(todos));
}

function* apiFetchTodos() {
    try {
        const todos = yield call(API.fetchTodos);

        yield put(fetchTodosSucceeded(todos));
    } catch (e) {
        yield put(fetchTodosFailed(e));
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
        yield put(toggleTodoFailed(e, id));
    }
}

function* allFetchTodos() {
    // order matters
    yield call(storageFetchTodos);
    yield call(apiFetchTodos);
}

function* storeAllTodos() {
    try {
        const todos = yield select((state) => state.todos);

        yield call(storage.storeTodos(todos));
    } catch (e) {
        // fail silently for storage
    }
}

function* watchFetchTodos() {
    yield takeLatest(ActionTypes.FETCH_TODOS, allFetchTodos)
}

function* watchAddTodo() {
    yield takeEvery(ActionTypes.ADD_TODO, apiAddTodo)
}

function* watchToggleTodo() {
    yield takeEvery(ActionTypes.TOGGLE_TODO, apiToggleTodo)
}

function* watchTodoChanges() {
    yield takeEvery([
        ActionTypes.TOGGLE_TODO_SUCCEEDED,
        ActionTypes.FETCH_TODOS_SUCCEEDED,
        ActionTypes.ADD_TODO_SUCCEEDED,
    ], storeAllTodos);
}

export default function* watchMany() {
    yield all([
        call(watchFetchTodos),
        call(watchAddTodo),
        call(watchToggleTodo),
        call(watchTodoChanges),
    ])
}