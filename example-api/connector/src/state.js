import storage from './storage';

export default () => ({ todos: storage.loadTodos() });
