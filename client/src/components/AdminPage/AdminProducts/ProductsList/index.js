import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Grid, List } from '@material-ui/core';

import useStyles from './useStyles';

import ProductItem from './ProductItem';


export default props => {


    const {productsList} = props;

    const dispatch = useDispatch();

    const classes = useStyles();

    return (
        <>
            <h3>Products: </h3>
            <List className={classes.listing} id='products-listing'>
                {productsList.map(item =>
                    <ProductItem
                        item={item}
                        key={item._id}
                    />
                )}
            </List>
        </>
    )
};
