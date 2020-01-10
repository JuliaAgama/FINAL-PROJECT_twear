import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";

import { Box, Grid, Typography } from '@material-ui/core';

import useStyles from './useStyles';
import CartItem from './CartItem';


export default props => {

    const {enableCheckout, handleUpdateCart} = props;

    const {cart} = useSelector(state => state.cart);

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        if (cart.products && cart.products.length > 0 && cart.products.reduce(((sum, el) => sum + el.quantity), 0) > 0) {
            enableCheckout(true);
            setSubtotal(cart.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
        } else {
            enableCheckout(false);
        }
    }, [cart]);

    const onIncrease = item => () => {
        if(item.quantity < item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity) {

            cart.products[cart.products.findIndex(el => el.product._id === item.product._id &&el.color._id === item.color._id && el.size._id === item.size._id)].quantity += 1;
            handleUpdateCart(cart);

            setSubtotal(cart.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
        }
    };

    const onDecrease = item => () => {
        if(item.quantity > 1 ) {

            cart.products[cart.products.findIndex(el => el.product._id === item.product._id &&el.color._id === item.color._id && el.size._id === item.size._id)].quantity -= 1;

            handleUpdateCart(cart);

            setSubtotal(cart.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
        }
    };

    const onRemove = item => () => {
        handleUpdateCart({
            products: cart.products.filter(el => !(el.product._id === item.product._id && el.color._id === item.color._id && el.size._id === item.size._id))
        });
    };

    const onClean = () => {
        handleUpdateCart({
            products: []
        });
    };

    // console.log('formData of cart: ', formData);

    const classes = useStyles();

    return (
        <Box mb={3}>
            {cart.products && cart.products.length > 0 ?
            <>
                <Box className={classes.cart}>
                    {cart.products.map(item =>
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
                <Grid container spacing={4} justify="space-between" alignItems="center">
                    <Grid item>
                        <Box fontSize={14} px={2}>All prices will be converted and charged in USD when checking out.</Box>
                    </Grid>
                    <Grid item>
                        <Typography component="div" className={classes.btnClean}>
                            <Box fontSize="body2.fontSize" px={6} py={1} onClick={onClean}>Clean cart</Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="flex-end" alignItems="flex-end">
                    <Grid item xs={12} md={5}>
                        <Box fontSize='h5.fontSize' textAlign='right' p={2}>Subtotal: ${subtotal}</Box>
                        <Box fontSize={14} fontStyle="italic" textAlign='right' px={2}>Delivery and taxes will be calculated at checkout</Box>
                    </Grid>
                </Grid>
            </> : <Box className={classes.cartEmpty}> No products in your cart. Go shopping!</Box>
            }
        </Box>
    )
};
