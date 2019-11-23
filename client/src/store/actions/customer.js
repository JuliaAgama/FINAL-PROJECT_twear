import CustomerApi from "../../services/Customer";
import * as Customer from "../constants/customer";

export function getCustomer(){
    return new CustomerApi().getCustomer();
}

export function getToken(customerInfo){
    return new CustomerApi().login(customerInfo);
}

export function newCustomer(customer){
    return new CustomerApi().registration(customer);
}

export function registrationAction(customer){
    return async function (dispatch) {
        await newCustomer(customer)
            .then(res => {
                return dispatch({
                    type: Customer.CUSTOMER_REGISTRATION,
                    data: res
                });
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

    };
}

export function loginAction(customer){
    return async function (dispatch) {
        await getToken(customer)
            .then(res => {
                if (res.success) {
                    localStorage.setItem("token", res.token);
                }
                return dispatch({
                    type: Customer.CUSTOMER_LOGIN,
                    data: res
                });
            });

        await getCustomer().then(res => {
            return dispatch({
                type: Customer.CUSTOMER_GET_CUSTOMER,
                data: res,
            });
        })

    };
}

export function logoutAction() {
    return function (dispatch) {
        localStorage.removeItem("token");
        return dispatch({
            type: Customer.CUSTOMER_LOGOUT
        });
    }

}