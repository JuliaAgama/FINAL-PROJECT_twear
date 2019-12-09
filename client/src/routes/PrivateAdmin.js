import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {

    return (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') &&  localStorage.getItem('isAdmin') ?
                <Component {...props} /> :
                <Redirect to={{
                    pathname: "/accessDenied",
                }} />
        }
    />
)};
