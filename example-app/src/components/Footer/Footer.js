import React from 'react';
import Filter from '../../containers/Filter';

import './Footer.css';

const Footer = () => (
    <ul className="filters">
        <Filter filter="SHOW_ALL"> All </Filter>
        <Filter filter="SHOW_ACTIVE"> Active </Filter>
        <Filter filter="SHOW_COMPLETED"> Completed </Filter>
    </ul>
);

export default Footer;
