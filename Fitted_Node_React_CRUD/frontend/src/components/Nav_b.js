import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';


function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                    <Link className="navbar-brand" id="navbar__logo" to="/">
                        Med<span id="logo__span">Base</span>
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/abtUs">About Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Join
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to = "/login">Log In</Link></li>
                                <li><Link className="dropdown-item" to="/Registration">Register</Link></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><Link className="dropdown-item" to="/terms_cond">Terms and Conditions</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;