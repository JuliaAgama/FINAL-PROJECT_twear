import React, {useState} from 'react';
import { Typography, Grid, List } from '@material-ui/core';
import ProductItem from './ProductItem';
import {useSelector} from "react-redux";


export default props => {

    const {productsList, newProductsGallery, galleryName} = props;


    const newGallery = useSelector(state => state.productsGallery.newProductsGallery);
    const currentGallery = useSelector(state => state.productsGallery.productsGalleries).find(item => item.name === galleryName);


    let productsGalleryCheckedProducts = [];
    if (newProductsGallery) {
        productsGalleryCheckedProducts = newGallery.checkedProduct;
    } else if (currentGallery){
        productsGalleryCheckedProducts = currentGallery.checkedProduct;
    } else {
        productsGalleryCheckedProducts = null;
    }

    let initialCount;
    if (productsGalleryCheckedProducts) {
        initialCount = productsGalleryCheckedProducts.length
    } else {
        initialCount = 0;
    }

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
                            newProductsGallery={newProductsGallery}
                            currentGallery={currentGallery}
                        />
                    )}
                </Grid>
            </List>
        </>
    )
};
