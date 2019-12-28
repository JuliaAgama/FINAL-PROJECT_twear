import * as PRODUCTS_GALLERY from '../constants/productGallery';

const initState = {
    productsGallery: {},
    productsGalleries: [],
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case PRODUCTS_GALLERY.PRODUCTS_GALLERY_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

        case PRODUCTS_GALLERY.PRODUCTS_GALLERY_RESPONSE_FAILED:
            return {
                ...state,
                ...{
                    error : action.error
                }
            };

        case PRODUCTS_GALLERY.PRODUCTS_GALLERY_GET_PRODUCT_GALLERY:
            return {
                ...state,
                ...{
                    productsGallery: action.data,
                    loaded: true
                }
            };

        case PRODUCTS_GALLERY.PRODUCTS_GALLERY_GET_ALL_PRODUCTS_GALLERY:
            return {
                ...state,
                ...{
                    productsGalleries: action.data,
                    loaded: true
                }
            };

        case PRODUCTS_GALLERY.PRODUCTS_GALLERY_ADD_PRODUCT_GALLERY:
            return {
                ...state,
                ...{
                    productsGalleries : [...state.productsGalleries, action.data],
                    loaded : true
                }
            };

        case PRODUCTS_GALLERY.PRODUCTS_GALLERY_UPDATE_PRODUCT_GALLERY:
            let updatedProductGallery = state.productsGalleries.map(el => {
                if(el.customId === action.data.customId){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    productsGalleries : updatedProductGallery,
                    loaded : true
                }
            };

        case PRODUCTS_GALLERY.PRODUCTS_GALLERY_DELETE_PRODUCT_GALLERY:
            let updated = state.productsGalleries.filter(el => {
                return el.customId !== action.data.customId
            });
            return {
                ...state,
                ...{
                    productsGalleries : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}