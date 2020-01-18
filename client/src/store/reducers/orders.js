import * as ORDERS from '../constants/orders';

const initState = {
    orders: [],
    ordersFiltered: {},
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case ORDERS.ORDERS_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

        case ORDERS.ORDERS_RESPONSE_FAILED:
            return {
                ...state,
                ...{
                    error : action.error
                }
            };

        case ORDERS.ORDERS_GET_ALL_ORDERS:
            return {
                ...state,
                ...{
                    orders: action.data,
                    loaded: true
                }
            };

        case ORDERS.ORDERS_GET_ORDERS_BY_FILTER:
            return {
                ...state,
                ...{
                    ordersFiltered: action.data,
                    loaded: true
                }
            };

        case ORDERS.ORDERS_GET_ORDERS_BY_CUSTOMER_ID:
            return {
                ...state,
                ...{
                    orders: action.data,
                    loaded: true
                }
            };

        case ORDERS.ORDERS_ADD_ORDER:
            return {
                ...state,
                ...{
                    orders : [...state.orders, ...[action.data]],
                    loaded : true
                }
            };

        case ORDERS.ORDERS_UPDATE_ORDER:
            let updatedOrders = state.orders.map(el => {
            if(el._id === action.data._id){
                return action.data
            }
            return el;
            });
            return {
                ...state,
                ...{
                    orders : updatedOrders,
                    loaded : true
                }
            };

        case ORDERS.ORDERS_DELETE_ORDER:
            let updated = state.orders.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    orders : updated,
                    loaded : true
                }
            };

        default:
            return state
    }
}
