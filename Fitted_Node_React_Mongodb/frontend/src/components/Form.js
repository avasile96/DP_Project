import React from 'react';

function Form() {
    return(
        <section>
            <div className="form" id="form">
                <div className="form__container">
                    <div className="form__img--container">
                        <div className="form__img--card"><i className="far fa-address-card fa-10x"></i></div>
                    </div>

                    <div className="form__content">
                        <h1>REGISTRATION</h1>
                        <div>
                            <form>
                                <div>
                                    <p>User ID</p>
                                    <input className="form__input100" type="text" name="username"></input>
                                    <span className="focus-input100" data-placeholder="Username"></span>
                                </div>

                                <div>
                                    <p>Password</p>
                                    <input className="form__input100" type="password" name="pass"></input>
                                    <span className="focus-input100" data-placeholder="Password"></span>
                                </div>

                                <div>
                                    <p>Medical License Number</p>
                                    <input className="form__input100" type="text" name="MLN"></input>
                                    <span className="focus-input100" data-placeholder="ML#"></span>
                                </div>

                                <a href="#" className="button">Register</a>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Form;