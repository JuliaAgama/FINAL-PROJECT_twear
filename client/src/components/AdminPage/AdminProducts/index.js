import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as topCatsActions from '../../../store/actions/topCats';
import * as categoriesActions from '../../../store/actions/categories';
import * as productsActions from '../../../store/actions/products';

import withWidth from '@material-ui/core/withWidth';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import RadioHorizontal from '../../common/inputs/RadioHorizontal';
import Selector from '../../common/inputs/Selector';
import Switch from '../../common/inputs/Switch';
import ErrorModal from '../../common/messages/ErrorModal';
// import Notification from '../../common/messages/Notification';

export default withWidth()(() => {

    const dispatch = useDispatch();

    const getTopCatsList = () => {
        topCatsActions.getAllTopCats()(dispatch);
    };

    const getCategoriesList = () => {
        categoriesActions.getAllCategories()(dispatch);
    };

    const getCategoriesByParentId = (id) => {
        categoriesActions.getCategoriesByParentId(id)(dispatch);
    };

    const getProductsList = () => {
        productsActions.getAllProducts()(dispatch);
    };

    useEffect(() => {
        getTopCatsList();
        getCategoriesList();
        getProductsList();
    }, []);

    const topCatsList = useSelector(state => state.topCats.topCats);
    const categoriesList = useSelector(state => state.categories.categories);
    const productsList = useSelector(state => state.products.products);

    //server errors catching:
    const topCatsError = useSelector(state => state.topCats.error);
    const categoriesError = useSelector(state => state.categories.error);
    const productsError = useSelector(state => state.products.error);

    const [errorIsOpen, setErrorIsOpen] = useState(false);

    useEffect(() => {
        if(topCatsError || categoriesError || productsError) {setErrorIsOpen(true)}
    },[topCatsError, categoriesError, productsError]
    );

    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);

    const onChangeTopCat = (id) => {
        id && id !== '' ?
        getCategoriesByParentId(id) :
        getCategoriesList();
    };

    const onChangeCategory = (id) => {
        console.log(id);
        console.log('category is changed')
    };

    // manage published\unpublished:
    const radioList = [
        {name: 'all', _id: 'all'},
        {name: 'yes', _id: 'enabled'},
        {name: 'no', _id: 'disabled'}]
    const [selectedValue, setSelectedValue] = useState(radioList[0]._id);
    const onChange = event => {
    setSelectedValue(event.target.value);
    };
    const radioCondition = id => selectedValue === id;


    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">PRODUCTS</Box>
            <Grid container className={classes.paper}>
                <Grid item xs={12}>
                    <h3>Filter products</h3>
                </Grid>
                    <Grid item xs={6} lg={4}>
                        <Selector
                            selectorName='Top Category'
                            selectorArr={topCatsList}
                            onChange={onChangeTopCat}
                        />
                    </Grid>
                    <Grid item xs={6} lg={4}>
                        <Selector
                            selectorName='Category'
                            selectorArr={categoriesList}
                            onChange={onChangeCategory}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <RadioHorizontal
                            legend="Published:"
                            listArray={radioList}
                            checkedCondition={radioCondition}
                            onChange={onChange}
                        />
                    </Grid>
            </Grid>
            <Grid container className={classes.paper}>

                <p>Products listing: </p>
                <List className={classes.listing}>
                    <Divider />
                    <Divider />
                </List>
            </Grid>
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={() => {}}
                closeFunction={closeErrorModal}
            />
        </Typography>
    )
});
