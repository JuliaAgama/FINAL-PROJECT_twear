import * as CATEGORIES from '../constants/categories';

const initState = {
    categories: [],
    loaded: false
};


export default function (state = initState, action) {

    switch (action.type) {

        case CATEGORIES.CATEGORIES_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

        case CATEGORIES.CATEGORIES_GET_ALL_CATEGORIES:
            return {
                ...state,
                ...{
                    categories: action.data,
                    loaded: true
                }
            };

        case CATEGORIES.CATEGORIES_ADD_CATEGORY:
            return {
                ...state,
                ...{
                    categories : [...state.categories, ...[action.data]],
                    loaded : true
                }
            };

            case CATEGORIES.CATEGORIES_UPDATE_CATEGORY:
            let updatedCategories = state.categories.map(el => {
                if(el._id === action.data._id){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    categories : updatedCategories,
                    loaded : true
                }
            };

            case CATEGORIES.CATEGORIES_DELETE_CATEGORY:
            let updated = state.categories.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    categories : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}
