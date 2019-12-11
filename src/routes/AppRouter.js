import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import LayoutRoute from "./LayoutRoute";
import Footer from "../components/Footer/Footer";
import Profile from "../pages/Profile/Profile";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to="/feed"/>
            </Route>
            <LayoutRoute path="/feed" component={Feed} footer={Footer}/>
            <LayoutRoute path="/login" component={Login}/>
            <LayoutRoute path="/profile" component={Profile} footer={Footer}/>
        </Switch>
    </Router>
);

export default AppRouter;