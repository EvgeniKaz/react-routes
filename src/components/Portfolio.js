import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h3>Links to portfolios </h3>
        <p>Check out my work!</p>
        <Link to="/portfolio/1">Item One!</Link>
        <Link to="/portfolio/2">Item Two!</Link>
    </div>
);

export default Portfolio;