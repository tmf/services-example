import React from 'react';
import PropTypes from 'prop-types';

import './Pill.css';

const Pill = ({ active, children, onClick }) => {
    if (active) {
        return <li className="pill"><a href="#" className="selected">{children}</a></li>;
    }

    return (
        // eslint-disable-next-line jsx-a11y/href-no-hash
        <li className="pill"><a
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
