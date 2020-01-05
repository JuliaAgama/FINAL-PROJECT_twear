import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllTopCats} from "../../store/actions/topCats";
import {getProductsGalleryForShow} from "../../store/actions/productsGallery";

import {Typography, Box, Grid} from "@material-ui/core";

import useStyles from "./useStyles";

import TopCatItem from "./TopCatItem";
import ProductGallery from "../common/ProductsGallery";


export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopCats());
        dispatch(getProductsGalleryForShow(true));
    },[dispatch]);

    const topCats = useSelector(state => state.topCats.topCats);
    let products = useSelector(state => state.productsGallery.productsGalleryForShow);
    products = products.checkedProduct;

    const classes = useStyles();

    return (
        <main>
            <Typography component='div'>
                <Box className={classes.header} fontSize='h4.fontSize'>
                    Pre Spring 20
                </Box>
                <Box className={classes.subHeader}>
                    Get ready for the festive season with our Pre Party collection —
                    including a lot of new jeans.
                </Box>
                <Grid container className={classes.Media}>
                    {topCats.map((item, index) =>
                        <TopCatItem href = {`top-category/${item.name}`} name = {item.name} id={index+1} key = {item._id} image = {item.img}/>
                    )}
                </Grid>
            </Typography>
            <ProductGallery products={products} homePage={true}/>
        </main>
    )
};
