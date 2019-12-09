import React, {useState} from 'react';
import {Route, Redirect,} from 'react-router-dom';
import {useSelector} from "react-redux";
import Customer from '../../../services/Customer'

export default function PrivateRoute ({ component: Component, ...rest }){

  const {customer}  = useSelector(state => state.customers);
  // const [ isAllowed, setIsAllowed] = useState(null);
  //
  // async function user() {
  //   await new Customer().getCustomer()
  //     .then(res => setIsAllowed(res.isAdmin));
  //   return '';
  // }

  return  (
          <Route {...rest} render={(props) => (
              customer.isAdmin === true
                  ? <Component {...props} />
                  : <Redirect to='/accessDenied' />
          )} />
  )
}
