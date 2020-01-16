import * as CUSTOMER from '../constants/customer';

const initState = {
    isAuth: false,
    customer: {},
    loaded: false,
    error: false
};

export default function (state = initState, action) {

    switch (action.type) {

        case CUSTOMER.CUSTOMER_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false,
                    error : false
                }
            };

        case CUSTOMER.CUSTOMER_RESPONSE_FAILED:
            return {
                ...state,
                ...{
                    loaded: false,
                    error: true
                }
            };

            case CUSTOMER.CUSTOMER_REGISTRATION:
                return {
                    ...state,
                    ...{
                    customer: action.data,
                    loaded: false,
                    error : false
                }
            };

        case CUSTOMER.CUSTOMER_EDIT_CUSTOMER_INFO:
            return {
                ...state,
                ...{
                    customer: action.data,
                    loaded: true,
                    error : false
                }
            };

        case CUSTOMER.CUSTOMER_UPDATE_PASSWORD:
            return {
                ...state,
                ...{
                    customer: action.data,
                    loaded: true,
                    error : false
                }
            };

            case CUSTOMER.CUSTOMER_LOGIN:
                return {
                    ...state,
                    ...{
                    isAuth: action.data.success,
                    loaded: true,
                    error : false
                }
            };

        case CUSTOMER.CUSTOMER_GET_CUSTOMER:
            return {
                ...state,
                ...{
                    customer: action.data,
                    isAuth: true,
                    // isAuth: action.data.success,
                    loaded: true,
                    error : false
                }
            };

        case CUSTOMER.CUSTOMER_LOGOUT:
            return {
                ...state,
                ...{
                    isAuth: false,
                    customer: {},
                    loaded: false,
                    error : false
                }
            };

        default:
            return state
    }
}