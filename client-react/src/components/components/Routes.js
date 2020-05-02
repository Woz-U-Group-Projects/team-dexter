import React from "react";
import Search from "./components/search.js";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Displays Navbar and Footer on all pages
//Sets up the routes for all pages
const Routes = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route path = "/search" component={Search} />
        </Switch>
        <Footer />
    </Router>
);

export default Routes;