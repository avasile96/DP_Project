import React, { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users";
import reg from "./pages/Registration"

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exect path="/404" component={NotFoundPage}/>
                    <Route exact path="/users" component ={UsersPage}/>
                    <Route exact path="/registration" component ={reg}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        )
    }
}

export default App;

