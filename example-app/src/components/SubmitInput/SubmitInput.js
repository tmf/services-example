import React from 'react';
import PropTypes from 'prop-types';

import './SubmitInput.css';

let SubmitInput = ({ onSubmit, placeholder }) => {
    let input;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                onSubmit(input.value);
                input.value = ''
            }}
        >
            <input
                className="new-todo"
                ref={node => {
                    input = node
                }}
                placeholder={placeholder}
            />
        </form>
    )
};
SubmitInput.propTypes = {
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
};
SubmitInput.defaultProps = {
    onSubmit: () => {},
    placeholder: 'type...',
};

export default SubmitInput;
