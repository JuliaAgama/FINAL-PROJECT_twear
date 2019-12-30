import * as CART from '../constants/cart';

const initState = {
    cart: {products: []},
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case CART.CART_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case CART.CART_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

            case CART.CART_GET_CART:
                return {
                    ...state,
                    ...{
                        cart: action.data,
                        loaded: true,
                        error: null
                    }
                };

            case CART.CART_CREATE_CART:
                return {
                    ...state,
                    ...{
                        cart: action.data,
                        loaded: true,
                        error: null
                    }
                };

            case CART.CART_UPDATE_CART:
                return {
                    ...state,
                    ...{
                        cart: action.data,
                        loaded: true,
                        error: null
                    }
                };

        case CART.CART_CLEAN_CART:
            return {
                ...state,
                ...{
                    cart: {products: []},
                    error: null
                }
            };

            // case CART.CART_DELETE_CART:
            //     return {
            //         ...state,
            //         ...{
            //             cart: action.data,
            //             loaded: true
            //         }
            //     };

            case CART.CART_ADD_PRODUCT:
                return {
                    ...state,
                    ...{
                        cart: action.data,
                        loaded: true,
                        error: null
                    }
                };

            case CART.CART_DECREASE_PRODUCT_QUANTITY:
                return {
                    ...state,
                    ...{
                        cart: action.data,
                        loaded: true,
                        error: null
                    }
                };

            case CART.CART_DELETE_PRODUCT:
                return {
                    ...state,
                    ...{
                        cart: action.data,
                        loaded: true,
                        error: null
                    }
                };

        default:
            return state
    }
}
