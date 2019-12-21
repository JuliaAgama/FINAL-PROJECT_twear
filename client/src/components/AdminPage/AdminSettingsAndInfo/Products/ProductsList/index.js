import React from 'react';
import { Typography, Grid, List } from '@material-ui/core';
import ProductItem from './ProductItem';

export default props => {

    const {productsList} = props;
    return (
        <>
            <Typography variant="h6" >Products</Typography>
            <List id='products-listing'>
                <Grid container spacing={3}>
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
