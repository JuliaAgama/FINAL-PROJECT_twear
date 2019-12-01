import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import ProductsApi from '../../../../services/Products';
import * as productsActions from '../../../../store/actions/products';

import { Typography, Box, Grid } from '@material-ui/core';

import useStyles from './useStyles';

import OpenEditButton from '../../../common/buttons/Edit';
import CarouselResponsive from '../../../common/images/CarouselResponsive';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Spinner from '../../../common/Spinner';


export default props => {

    const productName = props.match.params.productName;
    console.log(productName);


    // get products from store(or dataBase if store is empty):
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products.products);
    // const product = useSelector(state => state.product.product);
    // const colors = useSelector(state => state.colors.colors);

    useEffect(() => {
        productsActions.getProductsByFilter(`name=${productName}`)(dispatch);
        // (new ProductsApi()).getProductsByFilter(`name=${productName}`).then(res => console.log('hi, ', res))
    }, [dispatch])

    // find product by its name:
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if(products && products[0]) {setProduct(products[0])}
    }, [products]);

    // console.log(products);
    console.log(product);

    const classes = useStyles();

    return (
        <>
        <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">{productName.toUpperCase()} </Box>
        <Typography component="div" className={classes.root}>
            <Grid container className={classes.paper}>
                {product ?
                    <>
                        <Link to={""} className={classes.editBtn}> <OpenEditButton/> </Link>
                        <Grid item xs={6} sm={8} lg={9} className={classes.relative}>
                            <Typography component="div" variant="body2">
                                <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>Art: {product.itemNo} </Box>
                                <Box> {product.description} </Box>
                                <Box fontSize="h6.fontSize" className={classes.price}>Price: $ {product.price}</Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} lg={3} container className={classes.carousel}>
                            <Grid item className={classes.border}>
                                <CarouselResponsive
                                imgs={product.imgs}
                                showIndicators={false}
                                width='100%'
                                showThumbs={false}
                                />
                            </Grid>
                        </Grid>
                    </> : <Spinner/>
                }
            </Grid>
            <Grid container className={classes.paper}>
                <Link to={""} className={classes.editBtn}> <OpenEditButton/> </Link>
                <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>
                    Product Options (Colors (&images))
                </Box>
                {product && product.colors[0] ?
                    product.colors.map( item => (
                        <div key={Math.random()}>
                            <Grid item xs={6} sm={4} lg={3} container className={classes.carousel}>
                                <Grid item className={classes.border}>
                                    <Box fontSize="body1.fontSize" pt={2} pb={2}>Color: </Box>
                                    <CarouselResponsive
                                    imgs={item.imgsColor}
                                    showIndicators={false}
                                    width='100%'
                                    showThumbs={false}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    )) : <Spinner/>
                }
            </Grid>
            <Grid container className={classes.paper}>
                <Link to={""} className={classes.editBtn}> <OpenEditButton/> </Link>
                <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>
                    Product Inventory (Sizes, quantity, enabled\disabled (?))
                </Box>
            </Grid>
            <Link to={`/admin/products`}>
                <button >Back</button>
            </Link>
        </Typography>
        </>

    )
};
