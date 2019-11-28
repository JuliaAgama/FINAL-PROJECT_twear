import CustomerApi from "../../services/Customer";
import * as Customer from "../constants/customer";
import { SubmissionError } from 'redux-form';
import {closeModalAction} from "./modal";

export function getCustomer(){
    return new CustomerApi().getCustomer();
}

export function getToken(customerInfo){
    return new CustomerApi().login(customerInfo);
}

export function newCustomer(customer){
    return new CustomerApi().registration(customer);
}

export function customerSendRequest() {
    return {
        type: Customer.CUSTOMER_SEND_REQUEST
    };
}

export function customerResponseFailed() {
    return {
        type: Customer.CUSTOMER_RESPONSE_FAILED
    };
}

export function registrationAction(customer){
    return async function (dispatch) {

        dispatch(customerSendRequest());

        await newCustomer(customer)
            .then(res => {
                return dispatch({
                    type: Customer.CUSTOMER_REGISTRATION,
                    data: res
                });
            })
            .catch((error) => {
                    if (error.response.data.login) {
                        dispatch(customerResponseFailed());
                        throw new SubmissionError({
                            login: error.response.data.login
                        });
                    } else if (error.response.data.email) {
                        dispatch(customerResponseFailed());
                        throw new SubmissionError({
                            email: error.response.data.email
                        });
                    } else if (error.request) {
                        /*
                         * The request was made but no response was received, `error.request`
                         * is an instance of XMLHttpRequest in the browser and an instance
                         * of http.ClientRequest in Node.js
                         */
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request and triggered an Error
                        console.log('Error', error.message);
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
}

export function loginAction(customer){
    return async function (dispatch) {

        dispatch(customerSendRequest());

        await getToken(customer)
            .then(res => {
                if (res.success) {
                    localStorage.setItem("token", res.token);
                }
                return dispatch({
                    type: Customer.CUSTOMER_LOGIN,
                    data: res
                });
            })
            .catch((error) => {
                if (error.response.data.loginOrEmail) {
                    dispatch(customerResponseFailed());
                    throw new SubmissionError({
                        loginOrEmail: 'User does not exist'
                    });
                } else if (error.response.data.password) {
                    dispatch(customerResponseFailed());
                    throw new SubmissionError({
                        password: error.response.data.password
                    });
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
            });

        await getCustomer().then(res => {
            return dispatch({
                type: Customer.CUSTOMER_GET_CUSTOMER,
                data: res,
            });
        });

        dispatch(closeModalAction());
    };
}

export function getCustomerAction() {
    return function (dispatch) {
        getCustomer().then(res => {
            return dispatch({
                type: Customer.CUSTOMER_GET_CUSTOMER,
                data: res,
            });
        });
    }

}

export function logoutAction() {
    return function (dispatch) {
        localStorage.removeItem("token");
        return dispatch({
            type: Customer.CUSTOMER_LOGOUT
        });
    }

}