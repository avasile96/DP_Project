import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <section>
        <div class="footer__container">
            <div class="footer__links">
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <h2>About Us</h2>
                        <a href="/">How it works</a> <a href="/">Testimonials</a>
                        <a href="/">Careers</a> <a href="/">Terms of Service</a>
                    </div>
                    <div class="footer__link--items">
                        <h2>Contact Us</h2>
                        <a href="/">Contact</a> <a href="/">Support</a>
                        <a href="/">Legal</a>
                    </div>
                </div>
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <h2>Personal</h2>
                        <a href="/">Medical Doctor</a>
                        <a href="/">Patient</a>
                        <a href="/">Researcher</a>
                        <a href="/">Medical Institution</a>
                    </div>
                    <div class="footer__link--items">
                        <h2>Donate</h2>
                        <a href="/">Credit Card</a> <a href="/">Debit Card</a>
                        <a href="/">Crypto</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Footer;