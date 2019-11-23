import * as CATEGORIES from '../constants/categories';

const initState = {
    categoryItem: {},
    loaded: false,
    error: null
};


export default function (state = initState, action) {

    switch (action.type) {

        case CATEGORIES.CATEGORY_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case CATEGORIES.CATEGORY_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case CATEGORIES.CATEGORY_GET_CATEGORY_ITEM:
            return {
                ...state,
                ...{
                    categoryItem: action.data,
                    loaded: true
                }
            };

        default:
            return state
    }
}
