import React, { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users";
import reg from "./pages/Registration";
import login from "./pages/login";
import abtUs from "./pages/about";
import Dsh from "./pages/dash";
import pat_reg from "./pages/pat_reg";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exect path="/404" component={NotFoundPage}/>
                    <Route exact path="/users" component ={UsersPage}/>
                    <Route exact path="/Registration" component ={reg}/>
                    <Route exact path="/login" component ={login}/>
                    <Route exact path="/abtUs" component ={abtUs}/>
                    <Route exact path="/dash" component ={Dsh}/>
                    <Route exact path="/pat_reg" component ={pat_reg}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        )
    }
}

export default App;

