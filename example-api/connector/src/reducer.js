import { ActionTypes } from "./actions";

const randomString = () => Math.random().toString(36).substr(2, 9);

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: randomString(),
                    text: action.text,
                    completed: false,
                    updating: true,
                    error: false,
                }
            ];
        case ActionTypes.ADD_TODO_SUCCEEDED:
            return state.map((todo) =>
                (todo.text === action.text && todo.updating)
                    ? { ...todo, id: action.id, updating: false, error: false }
                    : todo
            );

        case ActionTypes.ADD_TODO_FAILED:
            return state.map((todo) =>
                (todo.text === action.text && todo.updating)
                    ? { ...todo, updating: false, error: action.error }
                    : todo
            );

        case ActionTypes.FETCH_TODOS_SUCCEEDED:
        case ActionTypes.LOAD_TODOS_SUCCEEDED:
            return [
                ...action.todos,
            ];
        case ActionTypes.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, updating: true, error: false }
                    : todo
            );

        case ActionTypes.TOGGLE_TODO_SUCCEEDED:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: action.completed, updating: false, error: false }
                    : todo
            );
        case ActionTypes.TOGGLE_TODO_FAILED:
            return state.map((todo) =>
                (todo.id === action.id)
                    ? { ...todo, updating: false, error: action.error }
                    : todo
            );
        default:
            return state;
    }
};
