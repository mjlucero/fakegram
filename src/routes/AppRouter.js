import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import LayoutRoute from "./LayoutRoute";
import Footer from "../components/Footer/Footer";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to="/feed"/>
            </Route>
            <LayoutRoute path="/feed" component={Feed} footer={Footer}/>
            <LayoutRoute path="/login" component={Login}/>
        </Switch>
    </Router>
);

export default AppRouter;