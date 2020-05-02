import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../static/logo.png';

function Navbar() {
    return(
        <nav id="site-nav" className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">
                <img id="nav-logo" width="75" height="auto" src={Logo} alt="inStitches" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto col-md-9">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search"><i className="fas fa-search"></i></NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto col-md-3">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;