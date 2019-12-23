import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from 'react-router-dom';

import { Container, Typography, Box, Grid, Hidden } from '@material-ui/core';

import Cart from './Cart';
import useStyles from './useStyles';

export default () => {

    const dispatch = useDispatch();

    const history = useHistory();
    const onCheckout = () => {
        console.log('check if user is logged in and then go to checkout page');
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="div">
                <Hidden smDown>
                    <Typography className={classes.header} variant="h4" component="h4">shopping bag</Typography>
                </Hidden>
                <Hidden mdUp>
                    <Typography className={classes.headerXS} variant="h4" component="h4">shopping bag</Typography>
                </Hidden>
            </Typography>
            <div>
                <Cart/>
            </div>
            <Grid container spacing={2} justify="flex-end">
                <Hidden smDown>
                    <Grid item md={5} lg={4}>
                        <Typography component="div" className={classes.btnRegular}>
                            <Box fontSize="body2.fontSize" onClick={() => history.push('/')}>Continue shopping</Box>
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={7} lg={5}>
                    <Typography component="div" className={classes.btnImportant}>
                        <Box fontSize="body2.fontSize" onClick={onCheckout}>Checkout</Box>
                    </Typography>
                </Grid>

            </Grid>

        </div>
    )
};
