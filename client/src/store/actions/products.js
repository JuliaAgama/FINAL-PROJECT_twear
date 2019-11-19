import * as PRODUCTS from '../constants/products';
import ProductsApi from '../../services/Products';


export function productsSendRequest() {
    return {
        type: PRODUCTS.PRODUCTS_SEND_REQUEST
    };
};

export function productItemSendRequest() {
    return {
        type: PRODUCTS.PRODUCT_SEND_REQUEST
    };
};

export function getAllProducts() {
    return function (dispatch) {
        dispatch(productsSendRequest());
        (new ProductsApi()).getProducts().then(res => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_GET_ALL_PRODUCTS,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getProductsBySearch(searchValue) {
    return function (dispatch) {
        dispatch(productsSendRequest());
        (new ProductsApi()).getProductsBySearch(searchValue).then(res => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_GET_PRODUCTS_BY_SEARCH,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getProductItem(id) {
    return function (dispatch) {
        dispatch(productItemSendRequest());
        (new ProductsApi()).getProductById(id).then(res => {
            return dispatch({
                type: PRODUCTS.PRODUCT_GET_PRODUCT_ITEM,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: PRODUCTS.PRODUCT_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function addProduct(item){
    return function (dispatch) {
        dispatch(productsSendRequest());
        (new ProductsApi()).addProduct(item).then(res => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_ADD_PRODUCT,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function updateProduct (item){
    return function (dispatch) {
        dispatch(productsSendRequest());
        (new ProductsApi()).updateProduct(item).then(res => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_UPDATE_PRODUCT,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function deleteProduct(item){
    return function (dispatch) {
        dispatch(productsSendRequest());
        (new ProductsApi()).deleteProduct(item).then(res => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_DELETE_PRODUCT,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: PRODUCTS.PRODUCTS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};
