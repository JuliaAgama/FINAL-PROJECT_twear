import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as productsActions from '../../../../store/actions/products';

import { Typography, Box, Grid, CssBaseline } from '@material-ui/core';

import useStyles from './useStyles';

import ProductBasicBox from './ProductBasicBox';
import ProductColorsBox from './ProductColorsBox';
import ProductInventoryBox from './ProductInventoryBox';
import Spinner from '../../../common/Spinner';
import OpenEditButton from '../../../common/buttons/Edit';

import 'react-image-gallery/styles/css/image-gallery-no-icon.css';


export default props => {

    const itemNo = props.match.params.itemNo;

    const dispatch = useDispatch();

    // const getSizesByParentId = (id) => {
    //     sizesActions.getAllSizeTypes()(dispatch);
    // };

    useEffect(() => {
        productsActions.getProductsByFilter(`itemNo=${itemNo}`)(dispatch);
        // getSizesList();
    }, [dispatch])

    const products = useSelector(state => state.products.productsFiltered.products);
    // const sizes = useSelector(state => state.sizes.sizes);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if(products && products[0]) {setProduct(products[0]);}
    }, [products]);


    const classes = useStyles();

    return (
        <>
        {product && product.name ?
            <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">{product.name.toUpperCase()} </Box> : <Spinner/>
        }
        <Typography component="div" className={classes.root}>
            <Grid container className={classes.paperOne}>
                {product ?
                    <>
                        <Link to={"/admin/products/edit/"+product.itemNo} className={classes.editBtn}> <OpenEditButton/> </Link>
                        <ProductBasicBox product={product}/>
                    </> :
                    <Spinner/>
                }
            </Grid>
            <Grid container className={classes.paperTwo}>
            {product ?
                <Link to={"/admin/products/edit/colors/"+product.itemNo} className={classes.editBtn}> <OpenEditButton/> </Link> : <></>
            }
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
                <Grid item xs={12}>
                    <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>
                        Product Inventory (Sizes, quantity, enabled\disabled (?))
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {product && product.colors[0] ?
                    <>
                        <CssBaseline />
                        <ProductInventoryBox product={product}/>
                    </> : <Spinner/>
                    }
                </Grid>

            </Grid>
            <Link to={`/admin/products`} className={classes.link}> {`<<   to Products List`} </Link>
        </Typography>
        </>
    )
};
