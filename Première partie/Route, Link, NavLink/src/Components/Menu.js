import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/" className="navbar-brand">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="navbar-item">
                    <NavLink to="/" className="nav-link">Docs</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/tutorials" className="nav-link">Tutorials</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/community" className="nav-link">Community</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Menu;
