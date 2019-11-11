import * as CATEGORIES from '../constants/categories';

const initState = {
    categories: [],
    menCategories: [
        {id: '1', title: 'New Arrivals', url: '/somewhere'},
        {id: '3', title: 'Coats & Jackets', url: '/somewhere'},
        {id: '4', title: 'Denim Jackets', url: '/somewhere'},
        {id: '5', title: 'Knitwear', url: '/somewhere'},
        {id: '6', title: 'Shirts', url: '/somewhere'},
        {id: '7', title: 'Sweatshirts', url: '/somewhere'},
        {id: '8', title: 'Suiting', url: '/somewhere'},
        {id: '9', title: 'T-shirts', url: '/somewhere'},
        {id: '10', title: 'Jeans', url: '/somewhere'},
        {id: '11', title: 'Trousers', url: '/somewhere'},
        {id: '12', title: 'Shorts', url: '/somewhere'},
        {id: '13', title: 'Shoes', url: '/somewhere'},
        {id: '14', title: 'Accessories', url: '/somewhere'},
        {id: '15', title: 'Service Collection', url: '/somewhere'},
        {id: '16', title: 'SALE', url: '/somewhere'},
        {id: '17', title: 'AW19 LOOKBOOK', url: '/somewhere'},
    ],
    womenCategories: [
        {id: '1', title: 'New Arrivals', url: '/somewhere'},
        {id: '3', title: 'Coats, Jackets & Blazers', url: '/somewhere'},
        {id: '4', title: 'Denim Jackets', url: '/somewhere'},
        {id: '5', title: 'Knitwear', url: '/somewhere'},
        {id: '6', title: 'Shirts & Blouses', url: '/somewhere'},
        {id: '7', title: 'Sweatshirts & Jumpers', url: '/somewhere'},
        {id: '8', title: 'Dresses & Jumpsuits', url: '/somewhere'},
        {id: '9', title: 'Tops & T-shirts', url: '/somewhere'},
        {id: '10', title: 'Jeans', url: '/somewhere'},
        {id: '11', title: 'Trousers', url: '/somewhere'},
        {id: '12', title: 'Skirts & Shorts', url: '/somewhere'},
        {id: '13', title: 'Shoes', url: '/somewhere'},
        {id: '14', title: 'Accessories', url: '/somewhere'},
        {id: '15', title: 'Service Collection', url: '/somewhere'},
        {id: '16', title: 'SALE', url: '/somewhere'},
        {id: '17', title: 'AW19 LOOKBOOK', url: '/somewhere'},
    ],
    loaded: false,
    isAdded: false
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
                    loaded : true,
                    isAdded: true
                }
            };

            case CATEGORIES.CATEGORIES_UPDATE_CATEGORY_BY_ID:
            let updatedCategories = state.CATEGORIES.map(el => {
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

            case CATEGORIES.CATEGORIES_DELETE_CATEGORY_BY_ID:
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
