import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {  useHistory } from 'react-router-dom';

import * as cartActions from '../../store/actions/cart';

import { Typography, Box, Grid, Hidden } from '@material-ui/core';

import Cart from './Cart';
import useStyles from './useStyles';


export default () => {

    const dispatch = useDispatch();

    const [checkoutAvailable, setCheckoutAvailable] = useState(false);

    const customerLoaded = useSelector(state => state.customers.loaded);
    const {cart} = useSelector(state => state.cart);

    useEffect(() => {
        if (customerLoaded) {
            dispatch(cartActions.getCart(cart));
        }
    }, [dispatch, customerLoaded, cart]);

    const enableCheckout = state => {
        setCheckoutAvailable(state);
    };

    const handleUpdateCart = formData => {
        dispatch(cartActions.updateCart({products: formData.products}))
    };

    const history = useHistory();

    const onContinue = () => {
        handleUpdateCart(cart);
        history.push('/');
    };

    const onCheckout = () => {
        handleUpdateCart(cart);
        history.push('/checkout/information');
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="div">
                <Typography className={classes.header} variant="h4" component="h4">shopping bag</Typography>
            </Typography>

            <Cart
                enableCheckout={enableCheckout}
                handleUpdateCart={handleUpdateCart}
            />

            <Grid container spacing={2} justify="flex-end">
                <Hidden smDown>
                    <Grid item xs={12} md={5} lg={4}>
                        <Typography component="div" className={classes.btnRegular}>
                            <Box fontSize="body2.fontSize" onClick={onContinue}>Continue shopping</Box>
                        </Typography>
                    </Grid>
                </Hidden>
                    {checkoutAvailable &&
                    <Grid item xs={12} md={7} lg={5}>
                        <Typography component="div" className={classes.btnImportant}>
                            <Box fontSize="body2.fontSize" onClick={onCheckout}>Checkout</Box>
                        </Typography>
                    </Grid>
                    }
            </Grid>
            <Box p={2} fontSize="body2.fontSize">
                <Box fontSize="body1.fontSize" pt={2}>CAN WE HELP?</Box>
                <p>By contacting Client Service, I agree to my data being transferred outside of my local country/region.</p>
                <p>Call us  +44 20 33 18 60 32</p>
                <p>Mon-Sat 9.30am-7pm CET</p>
                <p>Email us: support@twear.com</p>
                <p>We’ll reply within 24 hours</p>
            </Box>
        </div>
    )
};
