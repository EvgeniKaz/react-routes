import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio Route</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
      <NavLink to="/portfolio" activeClassName="is-active">To Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
);

export default Header;