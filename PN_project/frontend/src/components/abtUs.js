
import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

//Linked Pages

function Abt() {
    return(
        <div className="main" id="about">
            <div className="main__container">
                <div className="main__img--container">
                    <div className="main__img--card"><i className="fas fa-layer-group"/></div>
                </div>
                <div className="main__content">
                    <h1>How it works?</h1>
                    <h2>Share medical data anonymously</h2>
                    <p>And help save lives by providing teams of researchers all over
                        the world with enough data to study complex diseases</p>
                    <button className="main__btn"><a href="#">Find out more!</a></button>
                </div>
            </div>
        </div>
    );
}

export default Abt;