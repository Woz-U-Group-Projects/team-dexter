import React from 'react';
import { NavLink} from 'react-router-dom';
import Logo from '../assets/logo.png';

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
                <ul className="navbar-nav mr-auto">
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/task">Tasks</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;