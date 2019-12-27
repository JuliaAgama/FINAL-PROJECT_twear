import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import cloneDeep from 'lodash/cloneDeep';

// import * as cartLocalStorage from "../../../store/localStorage/cart";
import * as cartActions from "../../../store/actions/cart";

import { Box, Grid } from '@material-ui/core';

import useStyles from './useStyles';
import CartItem from './CartItem';
// import Spinner from '../../common/Spinner';


export default props => {

    const {enableCheckout, handleUpdateCart} = props;
    // const {enableCheckout, handleSetNewData, handleUpdateCart} = props;

    // const cart = useSelector(state => state.cart.cart);
    // const cartLoaded = useSelector(state => state.cart.loaded);
    // const customerError = useSelector(state => state.customers.error);
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.cart);
    // const customerLoaded = useSelector(state => state.customers.loaded);

    const [formData, setFormData] = useState({});
    const [subtotal, setSubtotal] = useState(0);

    // useEffect(() => {
    //     if(customerLoaded) {
    //         cartActions.getCart()(dispatch);
    //     }
    // }, [customerLoaded, dispatch]);


    useEffect(() => {
        const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {products: []};
        localCart.products.length > 0 ? setFormData(cloneDeep(JSON.parse(localStorage.getItem('cart')))) : setFormData({products: []});
        // if (customerError || !cartLoaded) {
            // customerLoaded ? setFormData(cloneDeep(JSON.parse(localStorage.getItem('cart')))) : setFormData({products: []});
            // localStorage.getItem('cart') ? setFormData(cloneDeep(JSON.parse(localStorage.getItem('cart')))) : setFormData({products: []});
        // } else if (cartLoaded) {
            // setFormData(cloneDeep(cart));
        // }
        return () => {
            setFormData({});
        }
    // }, [JSON.parse(localStorage.getItem('cart'))]);
    }, [localStorage.getItem('cart')]);
    // }, [customerLoaded, localStorage.getItem('cart')]);
    // }, [customerLoaded, customerError, cartLoaded, cart, localStorage.getItem('cart')]);

    useEffect(() => {
        if (localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).products.length > 0) {
        // if (formData.products && formData.products.length > 0) {
            enableCheckout(true);
            setSubtotal(JSON.parse(localStorage.getItem('cart')).products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
            // setSubtotal(formData.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
        } else {
            enableCheckout(false);
        }
    }, [localStorage.getItem('cart'), cart]);
    // }, [formData.products]);

    // useEffect(() => {
    //     handleSetNewData(formData);
    //     // handleUpdateCart(formData);
    //     return () => {
    //         handleSetNewData(null);
    //     }
    // }, [formData])


    const onIncrease = item => () => {
        if(item.quantity < item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity) {

            const localCart = JSON.parse(localStorage.getItem('cart'));

            localCart.products[localCart.products.findIndex(el => el.product._id === item.product._id &&el.color._id === item.color._id && el.size._id === item.size._id)].quantity += 1;

            handleUpdateCart(localCart);
            // cartLocalStorage.concatCart();

            // formData.products[formData.products.findIndex(el => el.product._id === item.product._id &&el.color._id === item.color._id && el.size._id === item.size._id)].quantity += 1;

            // setFormData({
            //     ...formData
            // });

            setSubtotal(localCart.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
            // setSubtotal(formData.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
            cartActions.getCart()(dispatch);
        }
    };

    const onDecrease = item => () => {
        if(item.quantity > 1 ) {

            const localCart = JSON.parse(localStorage.getItem('cart'));

            localCart.products[localCart.products.findIndex(el => el.product._id === item.product._id &&el.color._id === item.color._id && el.size._id === item.size._id)].quantity -= 1;

            handleUpdateCart(localCart);

            // formData.products[formData.products.findIndex(el => el.product._id === item.product._id && el.color._id === item.color._id && el.size._id === item.size._id)].quantity -= 1;

            // setFormData({
            //     ...formData
            // });

            setSubtotal(localCart.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));

            // setSubtotal(formData.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
            cartActions.getCart()(dispatch);
        }
    };

    const onRemove = item => () => {
        const localCart = JSON.parse(localStorage.getItem('cart'));
        handleUpdateCart({
            products: localCart.products.filter(el => !(el.product._id === item.product._id && el.color._id === item.color._id && el.size._id === item.size._id))
        });
        // handleUpdateCart({
        //     ...formData,
        //     products: formData.products.filter(el => !(el.product._id === item.product._id && el.color._id === item.color._id && el.size._id === item.size._id))
        // });
        cartActions.getCart()(dispatch);
    };

    // console.log('formData of cart: ', formData);

    const classes = useStyles();

    return (
        <Box mb={3}>
            {/* {formData.products ? */}
            {/* {localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).products ? */}
            {/* {localStorage.getItem('cart') ? */}
                {/* <> */}
                    {/* {formData.products.length > 0 ? */}
                    {localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).products.length > 0 ?
                        <>
                            <Box className={classes.cart}>
                                {/* {formData.products.map(item => */}
                                {JSON.parse(localStorage.getItem('cart')).products.map(item =>
                                    <Grid container className={classes.skuContainer}
                                        key={item.product._id+item.color._id+item.size._id}
                                    >
                                        <CartItem
                                            item={item}
                                            onIncrease={onIncrease(item)}
                                            onDecrease={onDecrease(item)}
                                            onRemove={onRemove(item)}
                                        />
                                    </Grid>
                                )}
                            </Box>
                            <Box fontSize={14} px={2}>All prices will be converted and charged in USD when checking out.</Box>
                            <Grid container spacing={4} justify="flex-end" alignItems="flex-end">
                                <Grid item xs={12} md={5}>
                                    <Box fontSize='h5.fontSize' textAlign='right' p={2}>Subtotal: ${subtotal}</Box>
                                    <Box fontSize={14} fontStyle="italic" textAlign='right' px={2}>Delivery and taxes will be calculated at checkout</Box>
                                </Grid>
                            </Grid>
                        </> : <Box className={classes.cartEmpty}> No products in your cart. Go shopping!</Box>
                    }
                {/* </> : <Spinner/>
            } */}
        </Box>
    )
};
