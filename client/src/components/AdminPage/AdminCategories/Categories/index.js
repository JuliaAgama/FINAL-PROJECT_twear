import React, { useState, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../../../../store/actions/categories';

import Spinner from '../../../common/Spinner';
import CategoryItem from './CategoryItem';
import AddWideButton from '../../../common/buttons/AddWide';
import ErrorModal from '../../../common/messages/ErrorModal';
import Notification from '../../../common/messages/Notification';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';


export default props => {

    const {topCatId} = props;

    const dispatch = useDispatch();
    useEffect(() => {
        categoriesActions.getAllCategories()(dispatch);
    }, [dispatch]);

    const getUpdatedCategoriesList = () => {
        categoriesActions.getAllCategories()(dispatch);
    };

    const categoriesList = useSelector(state => state.categories.categories);
    const categoriesLoaded = useSelector(state => state.categories.loaded);

    //server errors catching:
    const categoriesError = useSelector(state => state.categories.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect(() => {
        if(categoriesError) {setErrorIsOpen(true)}
    },[categoriesError]
    );
    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const reloadPage = () => window.location.reload(true);
    const closeErrorModal = () => setErrorIsOpen(false);

    // notification after deleting item:
    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = (itemName) => {
        ref.current(`Category ${itemName.toUpperCase()} has been deleted from database!`);
    };

    const classes = useStyles();

    return (
        <>
        {
            !categoriesLoaded ?
                <Spinner/> :
                (
                <Box >
                    <List className={classes.root}>
                        {categoriesList
                            .map(item => item.topCategory === topCatId ?
                                <CategoryItem
                                    item={item}
                                    key={item._id}
                                    handleNotification={handleNotification}
                                    getUpdatedCategoriesList={getUpdatedCategoriesList}
                                /> :
                                <div key={Math.random()}></div>
                            )
                        }
                        <Divider />
                        <ListItem>
                            <Link href={`/admin/categories/newCategory-${topCatId}`} className={classes.center}>
                                <AddWideButton text='ADD MORE' color='primary'/>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
                )
        }
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        <ErrorModal modalIsOpen={errorIsOpen} modalText={errorModalText} doFunction={reloadPage} closeFunction={closeErrorModal}/>
        </>
    )
};
