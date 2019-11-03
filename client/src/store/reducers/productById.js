import * as PRODUCT from '../constants/product';

const initState = {
    product: {},
    loaded: false
};

export default function (state = initState, action) {
    // switch (action.type) {
    //     case PRODUCT.PRODUCT_REQUEST_SENT:
    //         return {
    //             ...state,
    //             ...{
    //                 loaded: false
    //             }
    //         };
    //     case PRODUCT.FETCH_PRODUCT_BY_ID:
    //         return {
    //             ...state,
    //             ...{
    //                 product: action.data[0],
    //                 loaded: true
    //             }
    //         };
    //     default:
    //         return state
    // }
};
