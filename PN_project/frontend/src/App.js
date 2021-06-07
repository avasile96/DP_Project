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
import pat_reg from "./Pages/pat_reg";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/404" exect component={NotFoundPage}/>
                <Route path="/users" exact component ={UsersPage}/>
                <Route path="/Registration" exact component ={reg}/>
                <Route path="/login" exact component ={login}/>
                <Route path="/abtUs" exact component ={abtUs}/>
                <Route path="/dash" exact component ={Dsh}/>
                <Route path="/pat_reg" exact component ={pat_reg}/>
                Dashb
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default App;
