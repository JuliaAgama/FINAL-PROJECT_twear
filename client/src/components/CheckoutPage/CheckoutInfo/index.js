import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {  useHistory } from 'react-router-dom';

import * as cartActions from '../../../store/actions/cart';

import { Typography, Box, Grid, Hidden } from '@material-ui/core';

import useStyles from './useStyles';


export default () => {

    const dispatch = useDispatch();

    const customerLoaded = useSelector(state => state.customers.loaded);
    const {cart} = useSelector(state => state.cart);

    useEffect(() => {
        if (customerLoaded) {
            dispatch(cartActions.getCart(cart));
        }
    }, [dispatch, customerLoaded]);


    const history = useHistory();

    const onToShipping = () => {
        // handleUpdateOrder(data);
        history.push('/checkout/shipping');
    };

    const onToCart = () => {
        // handleUpdateOrder(data);
        history.push('/cart');
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box>bread crumbs</Box>
            <form>
                <Grid container>
                    <Grid item xs={7}>
                        <Box fontSize="h6.fontSize" textAlign='left'>Contact information</Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box fontSize={14} textAlign='right'>Already have an account? <span> Log in</span></Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Box fontSize="h6.fontSize" textAlign='left'>Shipping address</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box fontSize={14}>First name</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box fontSize={14}>Last name</Box>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
};
