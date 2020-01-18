import * as ORDERS from '../constants/orders';

const initState = {
    orderItem: {},
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case ORDERS.ORDER_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case ORDERS.ORDER_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

            case ORDERS.ORDER_GET_ORDER_ITEM:
                return {
                    ...state,
                    ...{
                        orderItem: action.data,
                        loaded: true
                    }
                };

            case ORDERS.ORDER_GET_ORDER_ITEM_BY_ITEMNO:
                return {
                    ...state,
                    ...{
                        orderItem: action.data,
                        loaded: true
                    }
                };

        default:
            return state
    }
}
