import React from 'react';
import { Link } from "react-router-dom";

function Form_b() {
    return(
        <form className="form" method="POST" action="/pat_reg">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <figure className= "figure">
                            <div className="figure-img img-fluid rounded">
                                <i className="far fa-address-card fa-10x"/>
                            </div>
                        </figure>
                    </div>
                    <div className="col">
                        <h1 className="display-1">REGISTRATION</h1>
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Patient Name</label>
                            <input type="text" className="form-control" id="username" aria-describedby="emailHelp" name="patient"/>
                            <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Blood Pressure</label>
                            <input type="text" className="form-control" id="bp" aria-describedby="emailHelp" name="blood"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">BMI (Body Mass Index)</label>
                            <input type="text" className="form-control" id="BMI" aria-describedby="emailHelp" name="BMI"/>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                        {/*<button type="submit" className="btn btn-primary">
                            Submit
                        </button>*/}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form_b;