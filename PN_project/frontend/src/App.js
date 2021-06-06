//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React from "react";

//Pages
import MainPage from "./Pages";
import NotFoundPage from "./Pages/404";
import UsersPage from "./Pages/users";
import reg from "./Pages/Registration";
import login from "./Pages/login";
import abtUs from "./Pages/about";
import Dsh from "./Pages/dash";

function App() {
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
                Dashb
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default App;
