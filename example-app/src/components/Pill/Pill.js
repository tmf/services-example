import React from 'react';
import PropTypes from 'prop-types';

const Pill = ({ active, children, onClick }) => {
    if (active) {
        return <li><a href="#">{children}</a></li>;
    }

    return (
        // eslint-disable-next-line jsx-a11y/href-no-hash
        <li><a
            href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a></li>
    )
};

Pill.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Pill;
