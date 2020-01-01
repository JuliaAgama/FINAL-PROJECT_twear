import React, { useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCustomerAction } from "../store/actions/customer";

import ErrorModal from '../components/common/messages/ErrorModal';

export default function PrivateRoute({ component: Component, ...rest }) {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.customers.isAuth);

    useEffect(() => {
        dispatch(getCustomerAction());
    }, [dispatch]);

    //catching error: server is not responding
    const customerError = useSelector(state => state.customers.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);

    useEffect(() => {
        if(customerError) {setErrorIsOpen(true)}
        return () => {
            setErrorIsOpen(false);
        }
    },[customerError]);

    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);

    const history = useHistory();

    return (
        <Route {...rest} render={props =>
            <>
                {
                    isAuth ? <Component {...props} /> : <Redirect to="/accessDenied" />
                }
                <ErrorModal
                    modalIsOpen={errorIsOpen}
                    modalText={errorModalText}
                    doFunction={() => history.push("/")}
                    closeFunction={closeErrorModal}
                />
            </>
        }
        />
    )
};