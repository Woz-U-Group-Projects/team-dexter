import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-dark-bg.png';

function Footer () {
        return(
            <footer id="footer" className="navbar navbar-dark navbar-extend-lg">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <img src={Logo} width="100px" alt="instiches-logo-light" />
                    </div>
                    <div class="col-md">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task">Tasks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                <div class="row">
                    <p id="copyright">©inStitches. 2020. All Rights Reserved.</p>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;