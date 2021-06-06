import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

//Linked Pages

function Hero() {
    return(
        <hero>
            <div className="hero" id="home">
                <div className="hero__container">
                    <h1 className="hero__heading">Saving lives <span>one byte </span>at a time</h1>
                    <p className="hero__description">World's First Centralized Medical Database</p>
                    <button className="main__btn">{/*<Link to="/" >Explore</Link>*/}</button>
                </div>
            </div>
        </hero>
    );
}

export default Hero;