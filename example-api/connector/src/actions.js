export const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    ADD_TODO_SUCCEEDED: 'ADD_TODO_SUCCEEDED',
    ADD_TODO_FAILED: 'ADD_TODO_FAILED',
    TOGGLE_TODO: 'TOGGLE_TODO',
    TOGGLE_TODO_SUCCEEDED: 'TOGGLE_TODO_SUCCEEDED',
    TOGGLE_TODO_FAILED: 'TOGGLE_TODO_FAILED',
    FETCH_TODOS: 'FETCH_TODOS',
    FETCH_TODOS_SUCCEEDED: 'FETCH_TODOS_SUCCEEDED',
    LOAD_TODOS_SUCCEEDED: 'LOAD_TODOS_SUCCEEDED',
    FETCH_TODOS_FAILED: 'FETCH_TODOS_FAILED',
};

export const addTodo = (text) => {
    return {
        type: ActionTypes.ADD_TODO,
        text,
    };
};

export const addTodoSucceeded = ({ id, text }) => {
    return {
        type: ActionTypes.ADD_TODO_SUCCEEDED,
        id,
        text,
    };
};

export const addTodoFailed = (error, text) => {
    return {
        type: ActionTypes.ADD_TODO_FAILED,
        error,
        text,
    };
};

export const toggleTodo = (id) => {
    return {
        type: ActionTypes.TOGGLE_TODO,
        id,
    };
};

export const toggleTodoSucceeded = ({ id, completed }) => {
    return {
        type: ActionTypes.TOGGLE_TODO_SUCCEEDED,
        id,
        completed,
    };
};

export const toggleTodoFailed = (error, id) => {
    return {
        type: ActionTypes.TOGGLE_TODO_FAILED,
        error,
        id,
    };
};

export const fetchTodos = () => {
    return {
        type: ActionTypes.FETCH_TODOS,
    };
};

export const fetchTodosSucceeded = (todos) => {
    return {
        type: ActionTypes.FETCH_TODOS_SUCCEEDED,
        todos,
    };
};

export const loadTodosSucceeded = (todos) => {
    return {
        type: ActionTypes.LOAD_TODOS_SUCCEEDED,
        todos,
    };
};

export const fetchTodosFailed = (error) => {
    return {
        type: ActionTypes.FETCH_TODOS_FAILED,
        error,
    };
};
