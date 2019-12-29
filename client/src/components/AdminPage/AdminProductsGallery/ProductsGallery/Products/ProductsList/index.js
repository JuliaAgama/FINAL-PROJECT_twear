import React, {useState} from 'react';
import { Typography, Grid, List } from '@material-ui/core';
import ProductItem from './ProductItem';
import {useSelector} from "react-redux";


export default props => {

    const {productsList, newProductsGallery} = props;


    const newGallery = useSelector(state => state.productsGallery.newProductsGallery);
    const currentGallery = useSelector(state => state.productsGallery.currentProductsGallery);

    let productsGalleryCheckedProducts = [];
    if (newProductsGallery) {
        productsGalleryCheckedProducts = newGallery.checkedProduct;
    } else {
        productsGalleryCheckedProducts = currentGallery.checkedProduct;
    }

    const initialCount = productsGalleryCheckedProducts.length;

    const [checked, setChecked] = useState(productsGalleryCheckedProducts);
    const [countOfChosenProducts, setCountOfChosenProducts] = useState(initialCount);

    return (
        <>
            <Typography variant="h6" >{countOfChosenProducts}</Typography>
            <List id='products-listing'>
                <Grid container spacing={3}>
                    {productsList.map(item =>
                        <ProductItem
                            item={item}
                            key={item._id}
                            checked = {checked}
                            setChecked={setChecked}
                            setCountOfChosenProducts={setCountOfChosenProducts}
                        />
                    )}
                </Grid>
            </List>
        </>
    )
};
