import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from "../pages/Home";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="/home" component={Home}/>
        </Switch>
    </Router>
);

export default AppRouter;