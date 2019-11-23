import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as topCatsActions from '../../../store/actions/topCats';
import * as categoriesActions from '../../../store/actions/categories';

import { Hidden } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import TopCategories from './TopCats';
import ErrorModal from '../../common/messages/ErrorModal';


export default withWidth()(props => {

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
        <div className={classes.root}>
            <div className={classes.header}>
                <Hidden >
                    <h3>CATEGORIES</h3>
                </Hidden>
            </div>
            <Grid container className={classes.paper}>
                <TopCategories/>
            </Grid>
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={() => {getTopCatsList(); getCategoriesList()}}
                closeFunction={closeErrorModal}
            />
        </div>
    )
});
