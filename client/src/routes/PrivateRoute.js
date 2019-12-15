import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCustomerAction } from "../store/actions/customer";

export default function PrivateRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.customers.customer);
  useEffect(() => {
    dispatch(getCustomerAction());
  }, [dispatch]);

  // const [ isAllowed, setIsAllowed] = useState(null);

  // const checkCustomer = async => {
  //     try {
  //         const getUser = await (new CustomerApi())
  //         .getCustomerByToken({token: localStorage.getItem('token')}) //написать правильный запрос
  //         .then(res => {
  //             res.data.customer.isAdmin ? //написать правильно путь к изАдмин
  //             setAllowed(true) : setAllowed(false)})
  //     } catch (error) {
  //         console.log('something happened')
  //     }
  // };

  return (
    // checkCustomer() ?
    <Route
      {...rest}
      render={props =>
        //isAllowed
        customer.firstName ? (
          customer.isAdmin === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/accessDenied" />
          )
        ) : (
          <div>Loading.........</div>
        )
      }
    />
    // /> : <></>
  );
}
