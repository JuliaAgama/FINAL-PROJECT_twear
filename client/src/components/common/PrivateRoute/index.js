import React from 'react';
import {Route, Redirect,} from 'react-router-dom';
import {useSelector} from "react-redux";

export default function PrivateRoute ({ component: Component, ...rest }){

  const {customer}  = useSelector(state => state.customers);

  return  <Route {...rest} render={(props) => (
        customer.isAdmin === true
            ? <Component {...props} />
            : <Redirect to='/accessDenied' />
    )} />
}
