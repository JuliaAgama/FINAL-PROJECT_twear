import React, {useState} from 'react';
import {Route, Redirect,} from 'react-router-dom';
import {useSelector} from "react-redux";

// import CustomerApi from '../services/Customer';


export default function PrivateRoute ({ component: Component, ...rest }){

    const {customer}  = useSelector(state => state.customers);

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

    return  (
        // checkCustomer() ?
            <Route {...rest} render={(props) => (
                //isAllowed
                customer.isAdmin === true
                    ? <Component {...props} />
                    : <Redirect to='/accessDenied' />
            )}
            />
            // /> : <></>
    )
};
