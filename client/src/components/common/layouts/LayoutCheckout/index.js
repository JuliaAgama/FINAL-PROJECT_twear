import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import clsx from 'clsx';

import {getCustomerAction} from "../../../../store/actions/customer";
import * as cartActions from '../../../../store/actions/cart';

import { Container, Grid, Hidden, Box, IconButton} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {LocalMallOutlined, NavigateNext} from '@material-ui/icons';

import useStyles from './useStyles';

import CheckoutCart from '../../../checkoutPages/CheckoutCart';

export default props => {

    const {cart} = useSelector(state => state.cart);
    const {customer} = useSelector(state => state.customers);
    const customerLoaded = useSelector(state => state.customers.loaded);

    const dispatch = useDispatch();

    useEffect(() => {
        (async function () {
            await dispatch(getCustomerAction());
            if(customerLoaded) {
                dispatch(cartActions.getCart(cart));
            }
        })();
    },[dispatch, customerLoaded]);

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => setExpanded(!expanded);

    const[cartTotal, setCartTotal] = useState(0);
    const calcTotalCart = total => {
        setCartTotal(total)
    };

    const breakpointValues = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    };

    const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='xl' className={classes.layoutContainer} >
                <Grid container component="main">
                    <Grid item xs={12} md={7} lg={8} className={classes.root}>
                        <Link to="/" >
                            <div className={classes.logo}>
                                <img className={classes.image} src="/img/twear_logo_grey-on-transparent.png" alt="NOT FOUND"/>
                            </div>
                        </Link>
                        <Hidden mdUp>
                            <Grid container spacing={1} alignItems='center' className={classes.containerSummary} onClick={handleExpandClick}>
                                <Grid item xs={8} container spacing={1} justify='flex-start' alignItems='center' >
                                    <Grid item><LocalMallOutlined fontSize="small" /></Grid>
                                    <Grid item>
                                        <Box> {expanded ? 'Hide' : 'Show'} order summary
                                            <IconButton
                                                className={clsx(classes.expand, {[classes.expandOpen]: expanded})}
                                                aria-expanded={expanded}
                                                color="default"
                                                aria-label="expandDown"
                                            >
                                                <NavigateNext />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box textAlign='right' pr={2} fontSize='h6.fontSize'>$ {cartTotal} </Box>
                                </Grid>
                                <Grid item xs={12} style={expanded ? {display: 'block', color: '#999'} : {display: 'none'}}><CheckoutCart calcTotalCart={calcTotalCart}/></Grid>
                            </Grid>
                        </Hidden>
                        <div>{props.children}</div>
                        <Box component="footer" fontSize={14} pt={3} textAlign='left' className={classes.footer}>All rights reserved</Box>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={12} md={5} lg={4} className={classes.paper}>
                            <Box fontSize='h6.fontSize'> Your Ordered Products: </Box>
                            <CheckoutCart calcTotalCart={calcTotalCart}/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
