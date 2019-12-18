import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as productsActions from '../../../../store/actions/products';

import { Typography, Box, Grid, Tooltip } from '@material-ui/core';

import useStyles from './useStyles';

import ProductBasicBox from './ProductBasicBox';
import ProductColorsBox from './ProductColorsBox';
import ProductEnabledBox from './ProductEnabledBox';
import ProductInventoryBox from './ProductInventoryBox';

import OpenEditButton from '../../../common/buttons/Edit';
import Notification from '../../../common/messages/Notification';
import ErrorModal from '../../../common/messages/ErrorModal';
import Spinner from '../../../common/Spinner';

import 'react-image-gallery/styles/css/image-gallery-no-icon.css';


export default props => {

    const itemNo = props.match.params.itemNo;

    const dispatch = useDispatch();

    useEffect(() => {
        productsActions.getProductsByFilter(`itemNo=${itemNo}`)(dispatch);
    }, [dispatch, itemNo])

    const productsFiltered = useSelector(state => state.products.productsFiltered.products);
    const productsLoaded = useSelector(state => state.products.loaded);

    //server errors catching:
    const productsError = useSelector(state => state.products.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect(() => {
        if(productsError) {setErrorIsOpen(true)}
    },[productsError]
    );
    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const openErrorModal = () => setErrorIsOpen(true);
    const closeErrorModal = () => setErrorIsOpen(false);


    const [product, setProduct] = useState(null);

    useEffect(() => {
        if(productsFiltered && productsFiltered[0]) {setProduct(productsFiltered[0]);}
    }, [productsFiltered]);

    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = item => {
        ref.current(`Product ${item.name.toUpperCase()} has been updated!`);
    };

    const history = useHistory();
    const classes = useStyles();

    return (
        <>
        {productsLoaded ?
            <>
            {product && product.name ?
                <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">{product.name.toUpperCase()} </Box> : <Spinner/>
            }
            <Typography component="div" className={classes.root}>
                <Grid container className={classes.paperOne}>
                    {product ?
                        <>
                        <Tooltip title="Edit Product Info">
                            <Link to={"/admin/products/edit/"+product.itemNo} className={classes.editBtn}> <OpenEditButton/> </Link>
                        </Tooltip>
                            <ProductBasicBox product={product}/>
                        </> :
                        <Spinner/>
                    }
                </Grid>
                <Grid container className={classes.paperTwo}>
                {product ?
                    <Tooltip title="Edit Images">
                        <Link to={"/admin/products/edit/colors/"+product.itemNo} className={classes.editBtn}> <OpenEditButton/> </Link>
                    </Tooltip> : <></>
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
                        ))  : product ?
                            <Box className={classes.light} pl={3}> No info of colors. Select at least one color </Box>: <Spinner/>
                    }
                </Grid>

                {product ?
                    <Grid container className={classes.paperThree} spacing={2}>
                        <Grid item>
                            Published in catalog:
                        </Grid>
                        <Grid item>
                            <ProductEnabledBox
                                handleNotification={handleNotification}
                            />
                        </Grid>
                    </Grid> : <></>
                }

                <Grid container className={classes.paperOne}>
                    {product && product.colors[0] ?
                    <>
                        <ProductInventoryBox
                            product={product}
                            handleNotification={handleNotification}
                            openErrorModal={openErrorModal}
                        />
                    </> : product ?
                        <Box className={classes.light} pl={3}> No info of quantity. Select at least one color </Box> : <Spinner/>
                    }
                </Grid>

                <Link to={`/admin/products`} className={classes.link}> {`<<   to Products List`} </Link>
            </Typography>
            </> : <Spinner/>
        }
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        <ErrorModal
            modalIsOpen={errorIsOpen}
            modalText={errorModalText}
            doFunction={() => history.push(`/admin/products/review/`+product.itemNo)}
            closeFunction={closeErrorModal}
        />
        </>
    )
};
