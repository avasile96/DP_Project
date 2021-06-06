import React from 'react';
import { Link } from "react-router-dom";

function Form() {
    return(
        <form className="form">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <figure className= "figure">
                            <div className="figure-img img-fluid rounded">
                                <i className="far fa-address-card fa-10x"></i>
                            </div>
                        </figure>
                    </div>
                    <div className="col">
                        <h1 className="display-1">LOG IN</h1>
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">User ID</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <Link type="Log In" className="btn btn-primary" to = "/dash">Submit</Link>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;