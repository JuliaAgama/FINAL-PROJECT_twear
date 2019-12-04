import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as productsActions from '../../../../store/actions/products';

import { Typography, Box, Grid } from '@material-ui/core';

import useStyles from './useStyles';

import ProductBasicBox from './ProductBasicBox';
import ProductColorsBox from './ProductColorsBox';
import Spinner from '../../../common/Spinner';
import OpenEditButton from '../../../common/buttons/Edit';

import 'react-image-gallery/styles/css/image-gallery-no-icon.css';


export default props => {

    const productName = props.match.params.productName;

    // get products from store filtered by name:
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productsFiltered.products);

    useEffect(() => {
        productsActions.getProductsByFilter(`name=${productName}`)(dispatch);
    }, [dispatch])

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if(products && products[0]) {setProduct(products[0]);}
    }, [products]);


    const classes = useStyles();

    return (
        <>
        <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">{productName.toUpperCase()} </Box>
        <Typography component="div" className={classes.root}>
            <Grid container className={classes.paperOne}>
                {product ?
                    <>
                        <Link to={"/admin/products/edit/"+product.name} className={classes.editBtn}> <OpenEditButton/> </Link>
                        <ProductBasicBox product={product}/>
                    </> :
                    <Spinner/>
                }
            </Grid>
            <Grid container className={classes.paperTwo}>
                <Link to={""} className={classes.editBtn}> <OpenEditButton/> </Link>
                <Grid item xs={12}>
                    <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>
                        Product Colors
                    </Box>
                </Grid>
                {product && product.colors[0]  ?
                    product.colors.map( item => (
                        <Grid item key={Math.random()} xs={3} sm={2} container className={classes.carousel}>
                            <Grid item className={classes.border}>
                                <ProductColorsBox item={item}/>
                            </Grid>
                        </Grid>
                    )) : <Spinner/>
                }
            </Grid>
            <Grid container className={classes.paperOne}>
                <Link to={""} className={classes.editBtn}> <OpenEditButton/> </Link>
                <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>
                    Product Inventory (Sizes, quantity, enabled\disabled (?))
                </Box>
            </Grid>
            <Link to={`/admin/products`} className={classes.link}> {`<<   to Products List`} </Link>
        </Typography>
        </>
    )
};
