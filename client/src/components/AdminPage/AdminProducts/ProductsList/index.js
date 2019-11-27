import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './useStyles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';

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
