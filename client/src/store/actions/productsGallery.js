import * as PRODUCTS_GALLERY from '../constants/productGallery';
import ProductsGalleryApi from '../../services/ProductGallery';


export function productsGallerySendRequest() {
    return {
        type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_SEND_REQUEST
    };
}

export function getAllProductsGallery() {
    return function (dispatch) {
        dispatch(productsGallerySendRequest());
        (new ProductsGalleryApi()).getProductsGallery().then(res => {
            return dispatch({
                type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_GET_ALL_PRODUCTS_GALLERY,
                data: res
            });
        })
            .catch(err => {
                return dispatch({
                    type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_RESPONSE_FAILED,
                    error: err.response.data
                })
            });
    };
};

export function getProductsGallery(customId) {
    return function (dispatch) {
        dispatch(productsGallerySendRequest());
        (new ProductsGalleryApi()).getProductGalleryById(customId).then(res => {
            return dispatch({
                type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_GET_PRODUCT_GALLERY,
                data: res
            });
        })
            .catch(err => {
                return dispatch({
                    type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_RESPONSE_FAILED,
                    error: err.response.data
                })
            });
    };
};

export function addProductsGallery(productsGallery){
    return function (dispatch) {
        dispatch(productsGallerySendRequest());
        (new ProductsGalleryApi()).addProductGallery(productsGallery).then(res => {
            return dispatch({
                type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_ADD_PRODUCT_GALLERY,
                data: res,
            });
        })
            .catch(err => {
                return dispatch({
                    type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_RESPONSE_FAILED,
                    error: err.response.data
                })
            })
    };
};

export function updateProductsGallery (productsGallery){
    return function (dispatch) {
        dispatch(productsGallerySendRequest());
        (new ProductsGalleryApi()).updateProductGallery(productsGallery).then(res => {
            return dispatch({
                type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_UPDATE_PRODUCT_GALLERY,
                data: res,
            });
        })
            .catch(err => {
                return dispatch({
                    type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_RESPONSE_FAILED,
                    error: err.response.data
                })
            })
    };
};

export function deleteProductsGallery(productsGallery){
    return function (dispatch) {
        dispatch(productsGallerySendRequest());
        (new ProductsGalleryApi()).deleteProductGallery(productsGallery).then(res => {
            return dispatch({
                type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_DELETE_PRODUCT_GALLERY,
                data: res,
            });
        })
            .catch(err => {
                return dispatch({
                    type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_RESPONSE_FAILED,
                    error: err.response.data
                })
            })
    };
};

export function createProductsGallery(productsGallery){
    return function (dispatch) {
        return dispatch({
                    type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_CREATE_PRODUCT_GALLERY,
                    data: productsGallery,
                });
        // dispatch(productsGallerySendRequest());
        // (new ProductsGalleryApi()).deleteProductGallery(productsGallery).then(res => {
        //     return dispatch({
        //         type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_DELETE_PRODUCT_GALLERY,
        //         data: res,
        //     });
        // })
        //     .catch(err => {
        //         return dispatch({
        //             type: PRODUCTS_GALLERY.PRODUCTS_GALLERY_RESPONSE_FAILED,
        //             error: err.response.data
        //         })
        //     })
    };
};