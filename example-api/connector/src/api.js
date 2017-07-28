import fetch from 'unfetch';
const path = '/api/todos';
const API = {
    addTodo(todo) {
        return fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }).then((response) => response.json());
    },
    toggleTodo(todo) {
        return fetch(`${path}/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...todo, completed: !todo.completed})
        }).then((response) => response.json());
    },
    fetchTodos() {
        return fetch(path).then((response) => response.json());
    },
};


export default API;