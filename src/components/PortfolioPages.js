import React from 'react';

const PortfolioPages = (props) => (
    <div>
        <h1>A thing I've Done</h1>
        <p>This Page for ID {props.match.params.id}</p>
    </div>
);

export default PortfolioPages;