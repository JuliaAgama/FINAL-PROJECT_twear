import Base from './base';
import ProductsApi from './Products';
import ColorsApi from './Colors';
import SizesApi from './Sizes';

export default class Carts extends Base {

    async getCart(cart) {
        // @desc expects cart as in redux store:
        // const cart = {
        //     products: [
        //       {
        //         product: {_id: "5da463678cca382250dd7bc7"},
        //         color: {_id: "2cb493678cca483200dd7bb6"},
        //         size: {_id: "1dc443658dca863550dd1ab4"},
        //         quantity: 2
        //       },
        //     ]
        //   };
        if (localStorage.getItem('token')) {
            return super.get('cart/').then(res => res.data).then(cart => {
                let checkedProducts = cart.products.map(item => {return {
                    product: item.product,
                    color: item.color,
                    size: item.size,
                    quantity: item.quantity <= item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity ?
                        item.quantity :
                        item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity
                }})
                return {...cart, products: checkedProducts}
            })
        } else {
            const promises = cart.products.map(async el => {return {
                product: await (new ProductsApi()).getProductById(el.product._id),
                color: await (new ColorsApi()).getColorById(el.color._id),
                size: await (new SizesApi()).getSizeById(el.size._id),
                quantity: el.quantity
            }});
            try {
                let checkedProducts = (await Promise.all(promises)).map(item => {return {
                    product: item.product,
                    color: item.color,
                    size: item.size,
                    quantity: item.quantity <= item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity ?
                        item.quantity :
                        item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity
                }});
                return {products: await checkedProducts};
            } catch (error){
                console.log('error in getting products, colors or sizes from db: ', error)
            }
        }
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

    async updateCart(updatedCart) {
    // @desc expects updatedCart as:
    // const updatedCart = {
    //     products: [
    //       {
    //         product: {_id: "5da463678cca382250dd7bc7"},
    //         color: {_id: "2cb493678cca483200dd7bb6"},
    //         size: {_id: "1dc443658dca863550dd1ab4"},
    //         quantity: 2
    //       },
    //     ]
    //   };

        if (localStorage.getItem('token')) {
            return super.put('cart/', updatedCart).then(res => res.data).then(cart => {
                let checkedProducts = cart.products.map(item => {
                    return {
                        product: item.product,
                        color: item.color,
                        size: item.size,
                        quantity: item.quantity <= item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity ?
                            item.quantity :
                            item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity
                    }
                })
                return {...cart, products: checkedProducts}
            })
        } else {
            const promises = updatedCart.products.map(async el => {return {
                product: await (new ProductsApi()).getProductById(el.product._id)
                    .then(res => {return {
                        ...res,
                        colors: res.colors.map(el => {return {
                            ...el,
                            color: el.color._id,
                            sizes: el.sizes.map(elem => {return {
                                ...elem,
                                size: elem.size._id
                            }})
                        }}),
                    }}),
                color: await (new ColorsApi()).getColorById(el.color._id).then(res =>  res),
                size: await (new SizesApi()).getSizeById(el.size._id).then(res => res),
                quantity: el.quantity
            }});
            try {
                let checkedProducts = (await Promise.all(promises)).map(item => {
                    return {
                        product: item.product,
                        color: item.color,
                        size: item.size,
                        quantity: item.quantity <= item.product.colors.find(el => el.color._id === item.color._id || el.color === item.color._id).sizes.find(el => el.size._id === item.size._id || el.size === item.size._id).quantity ?
                            item.quantity :
                            item.product.colors.find(el => el.color._id === item.color._id || el.color === item.color._id).sizes.find(el => el.size._id === item.size._id || el.size === item.size._id).quantity
                    }
                });
                return {products: checkedProducts};
            } catch (error){
                console.log('error in getting products, colors or sizes from db: ', error)
            }
        }
    }

    async addProductToCart(cart, newItem) {
        // @desc expects current cart object from reduxStore and
        // newItem = {
        //     product: {_id: "5da463678cca382250dd7bc7"},
        //     color: {_id: "2cb493678cca483200dd7bb6"},
        //     size: {_id: "1dc443658dca863550dd1ab4"},
        //     quantity: 1;
        // }

        const product = await (new ProductsApi()).getProductById(newItem.product._id);
        const color = await (new ColorsApi()).getColorById(newItem.color._id);
        const size = await (new SizesApi()).getSizeById(newItem.size._id);

        const existingCartItem = cart.products.find(el => el.product._id === product._id && el.color._id === color._id && el.size._id === size._id);

        const quantityIsAvailable = () => {
            const skuQuantityAvailable = product.colors.find(el => el.color._id === color._id || el.color === color._id).sizes.find(el => el.size._id === size._id || el.size === size._id).quantity;
            if (existingCartItem) {
                return skuQuantityAvailable > existingCartItem.quantity ? true : false;
            } else {
                return skuQuantityAvailable > 0 ? true : false;
            }
        };

        if (quantityIsAvailable()) {
            if (existingCartItem) {
                let updatedCart = {
                    ...cart,
                    products: cart.products.map(item => {return {
                        product: {
                            ...item.product,
                            colors: item.product.colors.map(el => {return {
                                ...el,
                                color: el.color._id,
                                sizes: el.sizes.map(elem => {return {
                                    ...elem,
                                    size: elem.size._id
                                }})
                            }}),
                        },
                        color: item.color,
                        size: item.size,
                        quantity: item.product._id === newItem.product._id && item.color._id === newItem.color._id && item.size._id === newItem.size._id ? item.quantity + 1 : item.quantity
                    }})
                };
                return this.updateCart(updatedCart);
            }
            if (localStorage.getItem('token')) {
                return super.put(`cart/${newItem.product._id}&${newItem.color._id}&${newItem.size._id}`).then(res => res.data)
            } else {
                cart.products.push({
                    product: {
                        ...newItem.product,
                        colors: newItem.product.colors.map(el => {return {
                            ...el,
                            color: el.color._id,
                            sizes: el.sizes.map(elem => {return {
                                ...elem,
                                size: elem.size._id
                            }})
                        }}),
                    },
                    color: newItem.color,
                    size: newItem.size,
                    quantity: newItem.quantity ? newItem.quantity : 1
                });
            }
        }
        return cart;
    }
};
