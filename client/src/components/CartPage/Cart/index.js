import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';

import * as cartActions from '../../../store/actions/cart';

import { Container, Typography, Box, Grid, Hidden } from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../common/Spinner';

export default () => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     cartActions.getCart()(dispatch);
    // }, [dispatch]);

    const cart = useSelector(state => state.cart.cart);

    const [formData, setFormData] = useState({});

    useEffect(() => {
        if(cart) {
            setFormData(cloneDeep(cart));
        } else if ( !cart && localStorage.getItem('cart')) {
            setFormData(cloneDeep(localStorage.getItem('cart')));
        } else {
            setFormData({products: []});
        }
        return () => {
            setFormData({});
        }
    }, [cart, localStorage.getItem('cart')]);

    console.log('formData of cart: ', formData);



    const history = useHistory();

    const classes = useStyles();

    return (
        <Box>
            {formData.products ?
                <>
                <Box className={classes.productList}>
                {formData.products.length > 0 ?
                    formData.products.map(el =>
                        <Box key={Math.random()}>some products</Box>
                    ) :
                    <Box> No products in your cart. Go shopping!</Box>
                }
                </Box>
                <Grid container>
                    <Grid item xs={12} md={7} lg={5}>
                    </Grid>
                </Grid>
                </> : <Spinner/>
            }
        </Box>
    )
};
