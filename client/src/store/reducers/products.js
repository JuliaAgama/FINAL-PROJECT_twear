import * as PRODUCTS from '../constants/products';

const initState = {
    products: [],
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case PRODUCTS.PRODUCTS_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case PRODUCTS.PRODUCTS_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case PRODUCTS.PRODUCTS_GET_ALL_PRODUCTS:
            return {
                ...state,
                ...{
                    products: action.data,
                    loaded: true
                }
            };

        case PRODUCTS.PRODUCTS_GET_PRODUCTS_BY_SEARCH:
            return {
                ...state,
                ...{
                    products: action.data,
                    loaded: true
                }
            };

        case PRODUCTS.PRODUCTS_ADD_PRODUCT:
            return {
                ...state,
                ...{
                    products : [...state.products, ...[action.data]],
                    loaded : true
                }
            };

            case PRODUCTS.PRODUCTS_UPDATE_PRODUCT:
            let updatedProducts = state.products.map(el => {
                if(el._id === action.data._id){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    products : updatedProducts,
                    loaded : true
                }
            };

            case PRODUCTS.PRODUCTS_DELETE_PRODUCT:
            let updated = state.products.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    products : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}
