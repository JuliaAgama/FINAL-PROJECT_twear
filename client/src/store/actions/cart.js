import * as CART from '../constants/cart';
import CartApi from '../../services/Cart';


export function cartSendRequest() {
    return {
        type: CART.CART_SEND_REQUEST
    };
};

export function getCart() {
    return function (dispatch) {
        dispatch(cartSendRequest());
        (new CartApi()).getCart().then(res => {
            return dispatch({
                type: CART.CART_GET_CART,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: CART.CART_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function createCart(newCart) {
    return function (dispatch) {
        dispatch(cartSendRequest());
        (new CartApi()).createCart(newCart).then(res => {
            return dispatch({
                type: CART.CART_CREATE_CART,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: CART.CART_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function updateCart (updatedCart) {
    return function (dispatch) {
        dispatch(cartSendRequest());
        (new CartApi()).updateCart(updatedCart).then(res => {
            return dispatch({
                type: CART.CART_UPDATE_CART,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: CART.CART_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

// export function deleteCart() {
//     return function (dispatch) {
//         dispatch(cartSendRequest());
//         (new CartApi()).deleteCart().then(res => {
//             return dispatch({
//                 type: CART.CART_DELETE_CART,
//                 data: res,
//             });
//         })
//         .catch(err => {
//             return dispatch({
//                 type: CART.CART_RESPONSE_FAILED,
//                 error: err.response.data
//             })
//         })
//     };
// };


export function addProductToCart(product, color, size) {
    return function (dispatch) {
        dispatch(cartSendRequest());
        (new CartApi()).addProductToCart(product, color, size).then(res => {
            return dispatch({
                type: CART.CART_ADD_PRODUCT,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: CART.CART_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function decreaseCartProductQuantity(product, color, size) {
    return function (dispatch) {
        dispatch(cartSendRequest());
        (new CartApi()).decreaseCartProductQuantity(product, color, size).then(res => {
            return dispatch({
                type: CART.CART_DECREASE_PRODUCT_QUANTITY,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: CART.CART_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function deleteProductFromCart(product, color, size) {
    return function (dispatch) {
        dispatch(cartSendRequest());
        (new CartApi()).deleteProductFromCart(product, color, size).then(res => {
            return dispatch({
                type: CART.CART_DELETE_PRODUCT,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: CART.CART_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};
