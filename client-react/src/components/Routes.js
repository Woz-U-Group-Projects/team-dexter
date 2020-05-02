import React from "react";
import Home from '../screens/Home';
import About from '../screens/About';
import Posts from '../screens/Posts';
import Search from '../screens/Search';
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
            <Route path = "/search" component={Search} />
        </Switch>
        <Footer />
    </Router>
);

export default Routes;