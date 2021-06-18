import React from 'react';
import {Link} from "react-router-dom"; // ES6 js

//Linked Pages

function Howorks() {
    return(
        <div className="main" id="about">
            <div className="main__container">
                <div className="main__img--container">
                    <div className="main__img--card"><i className="fas fa-layer-group"></i></div>
                </div>
                <div className="main__content">
                    <h1>How it works?</h1>
                    <h2>Share medical data anonymously</h2>
                    <p>And help save lives by providing teams of researchers all over
                        the world with enough data to study complex diseases</p>
                    <button className="main__btn"><Link to="/Registration">Join now!</Link></button>

                </div>
            </div>
        </div>
    );
}

export default Howorks;