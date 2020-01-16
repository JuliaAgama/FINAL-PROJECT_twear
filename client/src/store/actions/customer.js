import SubmissionError  from 'redux-form/lib/SubmissionError'

import Base from '../../services/base';
import CustomerApi from "../../services/Customer";
import * as Customer from "../constants/customer";

import * as cartActions from '../actions/cart';

import {closeModalAction} from "./modal";

export function getCustomer(){
    Base.setAuthToken();
    return new CustomerApi().getCustomer();
};

export function getToken(customerInfo){
    return new CustomerApi().login(customerInfo);
};

export function customerSendRequest() {
    return {
        type: Customer.CUSTOMER_SEND_REQUEST
    };
};

export function customerResponseFailed() {
    return {
        type: Customer.CUSTOMER_RESPONSE_FAILED,
    };
};

export function registrationAction(customer, cart){
    return async function (dispatch) {
        dispatch(customerSendRequest());

        await (new CustomerApi()).registration(customer)
        .then(res => {
            dispatch(cartActions.createCart(res, cart));
            return dispatch({
                type: Customer.CUSTOMER_REGISTRATION,
                data: res
            })
        })
        .catch((error) => {
            if (error.response.data.login) {
                throw new SubmissionError({
                    login: error.response.data.login
                });
            } else if (error.response.data.email) {
                throw new SubmissionError({
                    email: error.response.data.email
                });
            } else { // Something happened in setting up the request and triggered an Error
                dispatch(customerResponseFailed());
            }
        });

        await getToken({loginOrEmail: customer.login, password: customer.password})
        .then(res => {
            if (res.success) {
                localStorage.setItem("token", res.token);
            }
            return dispatch({
                type: Customer.CUSTOMER_LOGIN,
                data: res
            });
        });

        dispatch(closeModalAction());
    };
};

export function loginAction(customer, cart){
    return async function (dispatch) {
        dispatch(customerSendRequest());

        await getToken(customer)
        .then( res => {
            if (res.success) {
                localStorage.setItem("token", res.token);
                Base.setAuthToken();
            }
            return dispatch({
                type: Customer.CUSTOMER_LOGIN,
                data: res
            });
        })
        .catch((error) => {
            if (error.response.data.loginOrEmail) {
                throw new SubmissionError({
                    loginOrEmail: 'User does not exist'
                });
            } else if (error.response.data.password) {
                throw new SubmissionError({
                    password: error.response.data.password
                });
            } else {// Something happened in setting up the request and triggered an Error
                dispatch(customerResponseFailed());
            }
        });

        await getCustomer().then(res => {
            dispatch(cartActions.concatCart(cart));
            return dispatch({
                type: Customer.CUSTOMER_GET_CUSTOMER,
                data: res,
            });
        });
        dispatch(closeModalAction());
    };
};

export function editCustomerInfo(customer){
    return async function (dispatch) {
        dispatch(customerSendRequest());

        await (new CustomerApi()).editCustomerInfo(customer)
            .then(res => {
                return dispatch({
                    type: Customer.CUSTOMER_EDIT_CUSTOMER_INFO,
                    data: res
                })
            })
            .catch((error) => {
                if (error.response.data.login) {
                    throw new SubmissionError({
                        login: error.response.data.login
                    });
                } else if (error.response.data.email) {
                    throw new SubmissionError({
                        email: error.response.data.email
                    });
                } else if (error.response.data.password) {
                    throw new SubmissionError({
                        password: error.response.data.password,
                    });
                }  else { // Something happened in setting up the request and triggered an Error
                    dispatch(customerResponseFailed());
                }
            });

        dispatch(closeModalAction());
    };
};

export function getCustomerAction() {
    if (Base.getToken()){
        return function (dispatch) {
            getCustomer()
                .then(res => {
                    return dispatch({
                        type: Customer.CUSTOMER_GET_CUSTOMER,
                        data: res,
                    });
                })
                .catch((error) => {// if (error.response && error.response.status === 401)
                    customerResponseFailed();
                    console.log('Error', error.message);
                });
        }
    }
    else {
        return customerResponseFailed();
    }
};

export function logoutAction() {
    return function (dispatch) {
        // dispatch(cartActions.cleanCart());
        localStorage.removeItem("token");
        Base.setAuthToken();
        return dispatch({
            type: Customer.CUSTOMER_LOGOUT
        });
    }
};
