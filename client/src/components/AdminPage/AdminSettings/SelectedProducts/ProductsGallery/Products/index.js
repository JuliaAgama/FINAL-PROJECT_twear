import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as topCatsActions from '../../../../../../store/actions/topCats';
import * as categoriesActions from '../../../../../../store/actions/categories';
import * as productsActions from '../../../../../../store/actions/products';
import {updateProductsGallery} from "../../../../../../store/actions/productsGallery";

import {withWidth, Typography, Box, Grid, Button} from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../../../../common/Spinner';
import Selector from '../../../../../common/inputs/Selector';
import ProductsList from './ProductsList';
import ErrorModal from "../../../../../common/messages/ErrorModal";

function checkChosenProducts(productsGallery) {
    let response = '';
    const {checkedProduct} = productsGallery;
    if (checkedProduct && checkedProduct.length < 4) {
        response += `You must choose 4 products. Now chosen ${checkedProduct.length} products. `;
    } else if (!checkedProduct) {
        response += `You must choose 4 products. `;
    }
    return response;
}


export default withWidth()(props => {
    const {setExpanded, newProductsGallery, galleryName} = props;
    const topCatsList = useSelector(state => state.topCats.topCats);
    const categoriesList = useSelector(state => state.categories.categories);
    const productsList = useSelector(state => state.products.products);
    const topCatsLoaded = useSelector(state => state.topCats.loaded);
    const categoriesLoaded = useSelector(state => state.categories.loaded);
    const productsLoaded = useSelector(state => state.products.loaded);
    const currentGallery = useSelector(state => state.productsGallery.productsGalleries).find(item => item.name === galleryName);

    const [selectedTopCat, setSelectedTopCat] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categoriesDisplay, setCategoriesDisplay] = useState(categoriesList);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    const [errorModalText, setErrorModalText] = useState({title: `ERROR`, description: ``, button: 'Continue create'});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topCatsActions.getAllTopCats());
        dispatch(categoriesActions.getAllCategories());
        dispatch(productsActions.getAllProducts());
    }, [dispatch]);

    const onChangeTopCat = (id) => {
        setSelectedTopCat(id);
        setSelectedCategory('');
        id && id !== '' ? setCategoriesDisplay(categoriesList.filter(el => el.topCategory._id === id)) : setCategoriesDisplay(categoriesList);
    };

    const onChangeCategory = (id) => {
        id && id !== '' ? setSelectedCategory(id) : setSelectedCategory('');
    };

    const productsToDisplay = () => {
        let productsToDisplay;
        if (selectedCategory && selectedCategory !== '') {
            productsToDisplay = productsList.filter(item => item.categories.some(elem => elem.category._id === selectedCategory))
        } else if (selectedTopCat && selectedTopCat !== '') {
            productsToDisplay = productsList.filter(item => item.categories.some(elem => elem.category.topCategory === selectedTopCat))
        } else productsToDisplay = productsList;
        return productsToDisplay;
    };

    const closeErrorModal = () => setErrorIsOpen(false);

    const save = () => {
        if (galleryName) {
            const errorDescription = checkChosenProducts(currentGallery);
            if (errorDescription !== '') {
                setErrorModalText({...errorModalText, description: errorDescription})
                setErrorIsOpen(true);
            } else {
                dispatch(updateProductsGallery({...currentGallery}));
                setExpanded({products: false})
            }
        }
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
                {productsLoaded ? <ProductsList newProductsGallery={newProductsGallery} productsList={productsToDisplay()} galleryName={galleryName} /> : <Spinner/> }
            </Box>
            <Grid item xs={12}>
                {galleryName ?
                    <Button
                        fullWidth={true}
                        variant="outlined"
                        className={classes.btn}
                        onClick={save}>
                        {`SAVE`}
                    </Button>  : ''}
                <ErrorModal
                    modalIsOpen={errorIsOpen}
                    modalText={errorModalText}
                    doFunction={closeErrorModal}
                    closeFunction={closeErrorModal}
                />
            </Grid>
        </Typography>
    )
});