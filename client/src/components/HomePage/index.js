import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllTopCats} from "../../store/actions/topCats";
import {getProductsGalleryForShow} from "../../store/actions/productsGallery";

import {Hidden, Box, Grid} from "@material-ui/core";

import useStyles from "./useStyles";

import TopCatItem from "./TopCatItem";
import ProductGallery from "../common/ProductsGallery";
import BlackTicker from "../common/BlackTicker"
import PinkTicker from "../common/PinkTicker"

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
            <Box position='relative'>
                <Hidden smDown>
                    <PinkTicker/>
                </Hidden>
                <Box className={classes.header} fontSize='h4.fontSize'>
                    Pre Spring 2020
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
            </Box>
            <Hidden smDown>
                <BlackTicker/>
            </Hidden>
            <ProductGallery products={products} homePage={true}/>
            <Hidden smDown>
                <BlackTicker/>
            </Hidden>
        </main>
    )
};
