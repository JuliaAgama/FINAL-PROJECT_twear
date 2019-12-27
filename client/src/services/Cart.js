import Base from './base';

export default class Carts extends Base {

    getCart() {
        return super.get('cart/')
        .then(res => res.data)
    }

    createCart(newCart) {
    // @desc expects newCart as:
    // const newCart = {
    //     customer: '5da463678cca382250dd7bc7'
    //     products: []
    //   };
        return super.post('cart/', newCart)
        .then(res => res.data)
    }

    updateCart(updatedCart) {
    // @desc expects updatedCart as:
    // const updatedCart = {
    //     products: [
    //       {
    //         product: "5da463678cca382250dd7bc7",
    //         color: "2cb493678cca483200dd7bb6",
    //         size: "1dc443658dca863550dd1ab4",
    //         cartQuantity: 2
    //       },
    //       {
    //         product: "5d73ad04fcad90130470f08b",
    //         color: "2cb493678cca483200dd7bb6",
    //         size: "1dc443658dca863550dd1ab4",
    //         cartQuantity: 3
    //       }
    //     ]
    //   };
        return super.put('cart/', updatedCart)
        .then(res => res.data)
    }

    deleteCart() {
        return super.delete('cart/')
        .then(res => res.data)
    }


    addProductToCart(product, color, size) {
    //  @desc expects objects of product, color, size
        return super.put(`cart/:${product._id}&${color._id}&${size._id}`)
        .then(res => res.data)
    }

    decreaseCartProductQuantity(product, color, size) {
    //  @desc expects objects of product, color, size
        return super.delete(`cart/product/:${product._id}&${color._id}&${size._id}`)
        .then(res => res.data)
    }

    deleteProductFromCart(product, color, size) {
    //  @desc expects objects of product, color, size
        return super.delete(`cart/:${product._id}&${color._id}&${size._id}`)
        .then(res => res.data)
    }

};
