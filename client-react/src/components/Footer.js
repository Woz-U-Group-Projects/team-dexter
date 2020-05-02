import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../static/logo-dark-bg.png';

function Footer () {
    return(
        <footer id="footer" className="navbar navbar-dark navbar-extend-lg">
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <img src={Logo} width="100px" alt="instiches-logo-light" />
                </div>
                <div className="col-md">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/task">Tasks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="row">
                    <p id="copyright">©inStitches. 2020. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;