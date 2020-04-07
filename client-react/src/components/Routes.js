import React from "react";
import Home from './Home';
import Task from './Task';
import About from './About';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/task" component={Task} />
            <Route path = "/about" component={About} />
        </Switch>
        <Footer />
    </Router>
);

export default Routes;