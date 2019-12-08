import * as CUSTOMER from '../constants/customer';

const initState = {
    isAuth: false,
    customer: {},
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case CUSTOMER.CUSTOMER_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : true
                }
            };

        case CUSTOMER.CUSTOMER_RESPONSE_FAILED:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

        case CUSTOMER.CUSTOMER_REGISTRATION:
            return {
                ...state,
                ...{
                    customer: action.data
                }
            };

        case CUSTOMER.CUSTOMER_LOGIN:
            return {
                ...state,
                ...{
                    isAuth: action.data.success
                }
            };

        case CUSTOMER.CUSTOMER_GET_CUSTOMER:
            return {
                ...state,
                ...{
                    customer: action.data,
                    isAuth: action.data.success,
                    loaded: false
                }
            };

        case CUSTOMER.CUSTOMER_LOGOUT:
            return {
                ...state,
                ...{
                    isAuth: false,
                    customer: {}
                }
            };

        default:
            return state
    }
}