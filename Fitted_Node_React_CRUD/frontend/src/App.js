import React, { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users";
import reg from "./pages/Registration";
import login from "./pages/login";
import abtUs from "./pages/about";
import Dsh from "./pages/dash";
import pat_reg from "./pages/pat_reg";
import how_w from "./pages/how_it_works";
import t_and_cond from "./pages/terms_cond";
import pat_del from "./pages/pat_del";
import pat_up from "./pages/pat_up";

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
                    <Route exact path="/terms_cond" component ={t_and_cond}/>
                    <Route exact path="/pat_reg" component ={pat_reg}/>
                    <Route exact path="/how_it_works" component ={how_w}/>
                    <Route exact path="/pat_del" component ={pat_del}/>
                    <Route exact path="/pat_up" component ={pat_up}/>

                    <Redirect to="/404"/>
                </Switch>
            </Router>
        )
    }
}

export default App;

