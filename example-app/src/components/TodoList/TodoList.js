import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

class TodoList extends PureComponent {
    componentDidMount() {
        const { onMount } = this.props;
        onMount();
    }

    render() {
        const { todos, onTodoClick } = this.props;
        return <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
            ))}
        </ul>;
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired,
};

export default TodoList;
