const key = 'exampleApiStorage:v1';

const storage = {
    loadTodos() {
        try {
            const rawStorage = localStorage.getItem(key);
            return JSON.parse(rawStorage)['todos'] || [];
        } catch (e) {
            return [];
        }
    },

    storeTodos(todos) {
        localStorage.setItem(key, JSON.stringify({ todos }));
    },
};

export default storage;
