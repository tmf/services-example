import React from 'react';
import Filter from '../../containers/Filter';

const Footer = () => (
    <ul>
        <Filter filter="SHOW_ALL"> All </Filter>
        <Filter filter="SHOW_ACTIVE"> Active </Filter>
        <Filter filter="SHOW_COMPLETED"> Completed </Filter>
    </ul>
);

export default Footer;
