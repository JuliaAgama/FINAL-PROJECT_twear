import * as PRODUCTS from '../constants/products';

const initState = {
    productItem: {},
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case PRODUCTS.PRODUCT_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case PRODUCTS.PRODUCT_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

            case PRODUCTS.PRODUCT_GET_PRODUCT_ITEM:
                return {
                    ...state,
                    ...{
                        productItem: action.data,
                        loaded: true
                    }
                };

            case PRODUCTS.PRODUCT_GET_PRODUCT_ITEM_BY_ITEMNO:
                return {
                    ...state,
                    ...{
                        productItem: action.data,
                        loaded: true
                    }
                };

        default:
            return state
    }
}
