// import * as CART from '../constants/cart';
import CartApi from '../../services/Cart';


export const createNewCart = customer => {
    const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {products: []};
    // if (!localCart.customer || (localCart.customer && localCart.customer._id && localCart.customer._id === customer._id)) {
        return (new CartApi())
            .createCart({customer: customer._id, products: localCart.products})
            .then(res => localStorage.setItem('cart',  JSON.stringify(res)));
    // }
    // return (new CartApi())
    //     .createCart({customer: customer._id, products: []})
    //     .then(res => localStorage.setItem('cart',  JSON.stringify(res)));
};


export const concatCart = () => {
    const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {products: []};
    return (new CartApi()).getCart()
        .then(res => {
            const updatedCart = {products: [...localCart.products, ...res.products.filter(el => !localCart.products.some(elem => elem.product._id === el.product._id && elem.color._id === el.color._id && elem.size._id === el.size._id))]};
            return updatedCart;
        })
        .then(updatedCart =>
            (new CartApi())
            .updateCart({products: updatedCart.products})
            .then(res => localStorage.setItem('cart',  JSON.stringify(res)))
        )
};
