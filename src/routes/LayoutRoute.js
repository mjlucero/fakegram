import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';
import {localStorageGetItem} from "../utils";

const LayoutRoute = ({component: Component, notification, closeNotification, sidebar, header, footer, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            const {path} = rest;

            if (localStorageGetItem("user")) {
                if (path === "/login"){
                    return (<Redirect to={{pathname: '/', state: {from: matchProps.location}}}/>);
                }else{
                    return (<PageLayout sidebar={sidebar} header={header} footer={footer}>
                        <Component {...matchProps}/>
                    </PageLayout>);
                }
            }else{
                if (path === "/login") {
                    return (<PageLayout sidebar={sidebar} header={header} footer={footer}>
                        <Component {...matchProps}/>
                    </PageLayout>);
                }else{
                    return (<Redirect to={{pathname: '/login', state: {from: matchProps.location}}}/>);
                }
            }
        }}/>
    )
};

export default LayoutRoute;