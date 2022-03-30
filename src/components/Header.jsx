import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="orange darken-3">
            <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">React Shop</NavLink>
                <ul id="nav-mobile" className="nav-menu right hide-on-med-and-down">
                    <li><NavLink className='nav-menu__link' to="/">Home</NavLink></li>
                    <li><NavLink className='nav-menu__link' to="/about">About</NavLink></li>
                    <li><NavLink className='nav-menu__link' to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
