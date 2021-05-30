import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className="navbar">
            <div className="navbar__container">
                <a id="navbar__logo">Med<span id="logo__span">Base</span></a>
                <div className="navbar__toggle" id="mobile-menu">
                    <span className="bar"></span> <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a href="index_alex.html" className="navbar__links" id="home-page">Home</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#form" className="navbar__links" id="about-page">About</a>
                    </li>
                    <li className="navbar__btn">
                        <a href="#signup" className="button" id="sign-up-btn">Join</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;