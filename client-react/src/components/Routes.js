import React from "react";
import Home from '../screens/Home';
import Task from '../screens/Task';
import About from '../screens/About';
import SignUp from '../screens/SignUp';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Displays Navbar and Footer on all pages
//Sets up the routes for all pages
const Routes = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/about" component={About} />
            <Route path = "/task" component={Task} />
            <Route path = "/signup" component={SignUp} />
        </Switch>
        <Footer />
    </Router>
);

export default Routes;