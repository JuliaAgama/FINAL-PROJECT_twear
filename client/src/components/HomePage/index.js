import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../store/actions/products";

import {Typography, Hidden, Box} from "@material-ui/core";

import useStyles from "./useStyles";

import ProductGallery from "../common/ProductsGallery";
import CategoriesHome from "./CategoriesHome";

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getAllProducts())},[dispatch]);

    let products = useSelector(state => state.products.products);

    products.splice(4);

    const classes = useStyles();

    return (
        <Box>
            <Typography className={classes.header} variant="h4" component="h4">
                Pre Spring 20
            </Typography>
            <p className={classes.subHeader}>
                Get ready for the festive season with our Pre Party collection —
                including a lot of new jeans.
            </p>
            <CategoriesHome />
            <ProductGallery products={products} homePage={true}/>
        </Box>
    )
};
