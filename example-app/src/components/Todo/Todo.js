import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none'}}
    >
        <input type="checkbox" checked={completed} />
        <label>{text}</label>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
