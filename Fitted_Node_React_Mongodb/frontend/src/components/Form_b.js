import React from 'react';

function Form_b() {
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
                        <h1 className="display-1">REGISTRATION</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Medical License Number</label>
                            <input type="email" className="form-control" id="exampleInputML" aria-describedby="emailHelp"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>


        </form>
    );
}

export default Form_b;