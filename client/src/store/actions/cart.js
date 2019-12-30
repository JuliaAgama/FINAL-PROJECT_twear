import * as CART from '../constants/cart';
import CartApi from '../../services/Cart';
import ProductsApi from '../../services/Products';
import ColorsApi from '../../services/Colors';
import SizesApi from '../../services/Sizes';


export function cartSendRequest() {
    return {
        type: CART.CART_SEND_REQUEST
    };
};

export function getCart(cart) {
    return function (dispatch) {
        dispatch(cartSendRequest());

        (new CartApi()).getCart(cart)
        .then(res => {
            return dispatch({
                type: CART.CART_GET_CART,
                data: {products: res.products}
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

export function createCart(customer, cart) {
    return function (dispatch) {
        dispatch(cartSendRequest());

        (new CartApi())
        .createCart({customer: customer._id, products: cart.products})
        .then(res => {
            return dispatch({
                type: CART.CART_CREATE_CART,
                data: {products: res.products}
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

export function updateCart(updatedCart) {
    console.log('updateCart action , updatedCart: ', updatedCart)
    return function (dispatch) {
        dispatch(cartSendRequest());

        (new CartApi()).updateCart({products: updatedCart.products}).then(res => {
            console.log('updateCart action , CartApi.updateCart res: ', res)
            return dispatch({
                type: CART.CART_UPDATE_CART,
                data: {products: res.products},
            });
        })
        .catch(err => {
            return dispatch({
                type: CART.CART_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};

export function concatCart (localCart) {
    return function (dispatch) {
        dispatch(cartSendRequest());

        (new CartApi()).getCart(localCart)
        .then(res => {
            const updatedCart = {products: [...localCart.products, ...res.products.filter(el => !localCart.products.some(elem => elem.product._id === el.product._id && elem.color._id === el.color._id && elem.size._id === el.size._id))]};
            return updatedCart;
        })
        .then(res =>{
            dispatch(updateCart(res));
        })
        // .catch(err => {
        //     return dispatch({
        //         type: CART.CART_RESPONSE_FAILED,
        //         error: err.response.data
        //     })
        // })
    };
};

export function deleteCart() {
    return function (dispatch) {
        dispatch(cartSendRequest());
        (new CartApi()).deleteCart().then(res => {
            return dispatch({
                type: CART.CART_DELETE_CART,
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


export function addProductToCart(cart, newItem) {
    return function (dispatch) {
        dispatch(cartSendRequest());

            (new CartApi()).addProductToCart(cart, newItem).then(res => {
                return dispatch({
                    type: CART.CART_ADD_PRODUCT,
                    data: {products: res.products},
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

// export function decreaseCartProductQuantity(product, color, size) {
//     return function (dispatch) {
//         dispatch(cartSendRequest());
//         (new CartApi()).decreaseCartProductQuantity(product, color, size).then(res => {
//             return dispatch({
//                 type: CART.CART_DECREASE_PRODUCT_QUANTITY,
//                 data: {products: res.products},
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

export function deleteProductFromCart(product, color, size) {
    return function (dispatch) {
        dispatch(cartSendRequest());
        (new CartApi()).deleteProductFromCart(product, color, size).then(res => {
            return dispatch({
                type: CART.CART_DELETE_PRODUCT,
                data: {products: res.products},
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


// export function cleanCart() {
//     return function (dispatch) {
//         dispatch(updateCart({products: []}))
//     }
// };

export function cleanCart() {
    return {
        type: CART.CART_CLEAN_CART
    };
};
