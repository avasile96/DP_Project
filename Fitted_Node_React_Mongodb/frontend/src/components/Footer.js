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
                        <a href="/how_it_works">How it works</a>
                        <a href="/404">Testimonials</a>
                        <a href="/404">Careers</a>
                        <a href="/terms_cond">Terms of Service</a>
                    </div>
                    <div class="footer__link--items">
                        <h2>Contact Us</h2>
                        <a href="/404">Contact</a>
                        <a href="/404">Support</a>
                        <a href="/terms_cond">Legal</a>
                    </div>
                </div>
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <h2>Personal</h2>
                        <a href="/dash">Medical Doctor</a>
                        <a href="/404">Patient</a>
                        <a href="/404">Researcher</a>
                        <a href="/404">Medical Institution</a>
                    </div>
                    <div class="footer__link--items">
                        <h2>Donate</h2>
                        <a href="/404">Credit Card</a>
                        <a href="/404">Debit Card</a>
                        <a href="/404">Crypto</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Footer;