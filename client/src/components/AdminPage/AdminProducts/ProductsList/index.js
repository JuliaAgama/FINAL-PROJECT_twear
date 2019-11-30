import React  from 'react';

import { Typography, Grid, List } from '@material-ui/core';

import useStyles from './useStyles';

import ProductItem from './ProductItem';


export default props => {

    const {productsList} = props;

    const classes = useStyles();

    return (
        <>
            <Typography variant="h6" >Products</Typography>
            <List className={classes.listing} id='products-listing'>
                <Grid container>
                    {productsList.map(item =>
                        <ProductItem
                            item={item}
                            key={item._id}
                        />
                    )}
                </Grid>
            </List>
        </>
    )
};
