import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        className={completed ? 'completed' : ''}
    >
        <input type="checkbox" className="toggle" checked={completed} />
        <label>{text}</label>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
