import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import cloneDeep from 'lodash/cloneDeep';

import { Box, Grid } from '@material-ui/core';

import useStyles from './useStyles';
import CartItem from './CartItem';
import Spinner from '../../common/Spinner';


export default props => {

    const {enableCheckout, handleSetNewData, updateCart} = props;

    const cart = useSelector(state => state.cart.cart);
    const cartLoaded = useSelector(state => state.cart.loaded);
    const customerError = useSelector(state => state.customers.error);

    const [formData, setFormData] = useState({});
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        if (customerError) {
            localStorage.getItem('cart') ? setFormData(cloneDeep(localStorage.getItem('cart'))) : setFormData({products: []});
        } else if (cartLoaded) {
            setFormData(cloneDeep(cart));
        }
        return () => {
            setFormData({});
        }
    }, [customerError, cartLoaded, cart, localStorage.getItem('cart')]);

    useEffect(() => {
        if (formData.products && formData.products.length > 0) {
            enableCheckout(true);
            setSubtotal(formData.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
        } else {
            enableCheckout(false);
        }
    }, [formData.products]);

    useEffect(() => {
        handleSetNewData(formData);
        return () => {
            handleSetNewData(null)
        }
    }, [formData])


    const onIncrease = item => () => {
        if(item.quantity < item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity) {

            formData.products[formData.products.findIndex(el => el.product._id === item.product._id &&el.color._id === item.color._id && el.size._id === item.size._id)].quantity += 1;

            setFormData({
                ...formData
            });

            setSubtotal(formData.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
        }
    };

    const onDecrease = item => () => {
        if(item.quantity > 1 ) {

            formData.products[formData.products.findIndex(el => el.product._id === item.product._id && el.color._id === item.color._id && el.size._id === item.size._id)].quantity -= 1;

            setFormData({
                ...formData
            });

            setSubtotal(formData.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
        }
    };

    const onRemove = item => () => {
        updateCart({
            ...formData,
            products: formData.products.filter(el => !(el.product._id === item.product._id && el.color._id === item.color._id && el.size._id === item.size._id))
        });
    };

    console.log('formData of cart: ', formData);

    const classes = useStyles();

    return (
        <Box mb={3}>
            {formData.products ?
                <>
                    {formData.products.length > 0 ?
                        <>
                            <Box className={classes.cart}>
                                {formData.products.map(item =>
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
                </> : <Spinner/>
            }
        </Box>
    )
};
