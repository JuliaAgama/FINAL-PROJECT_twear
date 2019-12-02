import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as productsActions from '../../../../store/actions/products';

import { Typography, Box, Grid } from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../../common/Spinner';
import OpenEditButton from '../../../common/buttons/Edit';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';


export default props => {

    const productName = props.match.params.productName;

    // get products from store filtered by name:
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productsFiltered.products);
    // const colors = useSelector(state => state.colors.colors);

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
                        <Grid item xs={8} sm={9} lg={10} className={classes.details}>
                            <Typography component="div" variant="body2">
                                <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>Art: {product.itemNo} </Box>
                                <Box> {product.description} </Box>
                                <Box fontSize="h6.fontSize" className={classes.price}>Price: $ {product.price}</Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={3} lg={2} container >
                            <Grid item className={classes.carousel}>
                                <ImageGallery
                                    items={product.imgs.map(url => ({original: url, thumbnail: url} ))}
                                    showIndex={true}
                                    showBullets={true}
                                    showThumbnails={false}
                                    thumbnailPosition={'top'}
                                />
                            </Grid>
                        </Grid>
                    </> : <Spinner/>
                }
            </Grid>
            <Grid container className={classes.paperTwo}>
                <Link to={""} className={classes.editBtn}> <OpenEditButton/> </Link>
                <Grid item xs={12}>
                    <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>
                        Product Options (Colors (&images))
                    </Box>
                </Grid>
                {product && product.colors[0] ?
                    product.colors.map( item => (
                        <Grid item key={Math.random()} xs={3} sm={2} container className={classes.carousel}>
                            <Grid item className={classes.border}>
                                <Box fontSize="body1.fontSize" pt={2} pb={2}>Color: </Box>
                                <ImageGallery
                                    items={item.imgsColor.map(url => ({original: url, thumbnail: url} ))}
                                    showIndex={true}
                                    showBullets={true}
                                    showThumbnails={false}
                                    thumbnailPosition={'top'}
                            />
                            </Grid>
                        </Grid>
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
