import * as CUSTOMER from '../constants/customer';

const initState = {
    isAuth: false,
    customer: {}
};

export default function (state = initState, action) {

    switch (action.type) {

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
                    customer: action.data
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