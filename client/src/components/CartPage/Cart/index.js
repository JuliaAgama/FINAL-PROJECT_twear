import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from 'react-router-dom';

import * as cartActions from '../../../store/actions/cart';

import { Container, Typography, Box, Grid, Hidden } from '@material-ui/core';

import useStyles from './useStyles';

export default () => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     cartActions.getCart()(dispatch);
    // }, [dispatch]);

    const cart = useSelector(state => state.cart.cart);
    const cartLoaded = useSelector(state => state.cart.loaded);
    const cartError = useSelector(state => state.cart.error);

    const history = useHistory();


    const classes = useStyles();

    return (
        <div>
            <div className={classes.productList}>

            </div>
            <Grid container>
                <Grid item xs={12} md={7} lg={5}>
                </Grid>
            </Grid>
        </div>
    )
};
