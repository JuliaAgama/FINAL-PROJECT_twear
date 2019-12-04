import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as topCatsActions from '../../../store/actions/topCats';
import * as categoriesActions from '../../../store/actions/categories';

import { Typography, Box, Grid, Hidden, withWidth } from '@material-ui/core';

import useStyles from './useStyles';

import TopCategories from './TopCats';
import ErrorModal from '../../common/messages/ErrorModal';


export default withWidth()(() => {

    const dispatch = useDispatch();

    const getTopCatsList = () => {
        topCatsActions.getAllTopCats()(dispatch);
    };

    const getCategoriesList = () => {
        categoriesActions.getAllCategories()(dispatch);
    };

    useEffect(() => {
        getTopCatsList();
        getCategoriesList();
    }, []);

    //server errors catching:
    const topCatsError = useSelector(state => state.topCats.error);
    const categoriesError = useSelector(state => state.categories.error);

    const [errorIsOpen, setErrorIsOpen] = useState(false);

    useEffect(() => {
        if(topCatsError || categoriesError) {setErrorIsOpen(true)}
    },[topCatsError, categoriesError]
    );

    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">CATEGORIES</Box>

            <Grid container className={classes.paper}>
                <TopCategories/>
            </Grid>
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={() => {closeErrorModal(); getTopCatsList(); getCategoriesList()}}
                closeFunction={closeErrorModal}
            />
        </Typography>
    )
});
