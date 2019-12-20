import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as topCatsActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import * as productsActions from '../../../../store/actions/products';

import { withWidth, Typography, Box, Grid, Hidden } from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../../common/Spinner';
import Selector from '../../../common/inputs/Selector';
import ProductsList from '../../AdminProducts/ProductsList';


export default withWidth()(() => {


    const [enabled, setEnabled] = useState(null);
    const [selectedTopCat, setSelectedTopCat] = useState('');
    const [categoriesDisplay, setCategoriesDisplay] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const dispatch = useDispatch();

    const getTopCatsList = () => {
        topCatsActions.getAllTopCats()(dispatch);
    };
    const getCategoriesList = () => {
        categoriesActions.getAllCategories()(dispatch);
    };
    const getProductsList = () => {
        productsActions.getAllProducts()(dispatch);
    };

    useEffect(() => {
        getTopCatsList();
        getCategoriesList();
        getProductsList();
        return () => {
            getTopCatsList();
            getCategoriesList();
            getProductsList();
        }
    }, []);

    const topCatsList = useSelector(state => state.topCats.topCats);
    const categoriesList = useSelector(state => state.categories.categories);
    const productsList = useSelector(state => state.products.products);
    const topCatsLoaded = useSelector(state => state.topCats.loaded);
    const categoriesLoaded = useSelector(state => state.categories.loaded);
    const productsLoaded = useSelector(state => state.products.loaded);

    useEffect(() => {
        setCategoriesDisplay(categoriesList);
        return () => {
            setCategoriesDisplay([]);
        }
    }, [categoriesList]);

    const onChangeTopCat = (id) => {
        setSelectedTopCat(id);
        setSelectedCategory('');
        id && id !== '' ? setCategoriesDisplay(categoriesList.filter(el => el.topCategory._id === id)) : setCategoriesDisplay(categoriesList);
    };

    const onChangeCategory = (id) => {
        id && id !== '' ? setSelectedCategory(id) : setSelectedCategory('');
    };

    const productsDisplay = () => {

        let productsToDisplay = selectedCategory && selectedCategory !== '' ?
            productsList.filter(item =>
                item.categories.some(elem =>
                    elem.category._id === selectedCategory)
            ) :
            productsList.filter(item =>
                item.categories.some(elem =>
                    elem.category._id === categoriesDisplay
                        .map(el => el._id)
                        .find(el => el === elem.category._id)
                )
            );
        if(enabled !== null) {
            return productsToDisplay.filter(item => item.enabled === enabled);
        }

        return productsToDisplay;
    };

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <Box p={2} textAlign="center" className={classes.paper} >
                <Typography component="div" variant="h6">Filter</Typography>
                {topCatsLoaded && categoriesLoaded ?
                    (
                        <Grid container className={classes.paper}>
                            <Grid item xs={12} sm={6} lg={4} className={classes.input}>
                                <Selector
                                    selectorName='Top Category'
                                    selectorArr={topCatsList}
                                    selectedItem={selectedTopCat}
                                    onChange={onChangeTopCat}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4} className={classes.input}>
                                <Selector
                                    selectorName='Category'
                                    selectorArr={categoriesDisplay}
                                    selectedItem={selectedCategory}
                                    onChange={onChangeCategory}
                                />
                            </Grid>
                        </Grid>
                    ) :
                    <Spinner/>
                }
            </Box>
            <Box p={2} textAlign="center" className={classes.paper} >
                {productsLoaded ? <ProductsList productsList={productsDisplay()} /> : <Spinner/> }
            </Box>
        </Typography>
    )
});