import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            sessionStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    //pathname: "/admin/login",
                    state: { from: props.location }
                }} />
            )
        }
    />
);
