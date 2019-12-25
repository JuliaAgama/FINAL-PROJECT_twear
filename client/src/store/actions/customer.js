import { SubmissionError } from 'redux-form';

import Base from '../../services/base';
import CustomerApi from "../../services/Customer";
import * as Customer from "../constants/customer";
import * as Cart from "../constants/cart";

import CartApi from "../../services/Cart";
// import * as cartActions from '../actions/cart';

import {closeModalAction} from "./modal";

export function getCustomer(){
    Base.setAuthToken();
    return new CustomerApi().getCustomer();
}

export function getToken(customerInfo){
    return new CustomerApi().login(customerInfo);
}

export function newCustomer(customer){
    return new CustomerApi().registration(customer);
}

const createNewCart = customer => {
    const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {products: []};
    return new CartApi().createCart({customerId: customer._id, products: localCart.products});
};

const concatCart = () => {
    const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {products: []};
    return new CartApi().updateCart({products: localCart.products});
};

export function customerSendRequest() {
    return {
        type: Customer.CUSTOMER_SEND_REQUEST
    };
}

export function cleanCart() {
    return {
        type: Cart.CART_CLEAN_CART
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
                createNewCart(res);
                // cartActions.createCart(res);
                // console.log('registrationAction', res);
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
                    Base.setAuthToken();
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
    if (Base.getToken()){
        return function (dispatch) {
            getCustomer()
                .then(res => {
                    return dispatch({
                        type: Customer.CUSTOMER_GET_CUSTOMER,
                        data: res,
                    });
                })
                .catch((error) => {
                    // if (error.response && error.response.status === 401)
                    customerResponseFailed();
                    console.log('Error', error.message);
                });
        }
    }
    else {
        return customerResponseFailed();
    }
}

export function logoutAction() {
    return function (dispatch) {
        localStorage.removeItem("token");
        Base.setAuthToken();
        dispatch(cleanCart());
        return dispatch({
            type: Customer.CUSTOMER_LOGOUT
        });
    }

}