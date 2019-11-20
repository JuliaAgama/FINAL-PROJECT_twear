import React, { useState, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as topCatActions from '../../../../store/actions/topCats';

import Spinner from '../../../common/Spinner';
import TopCatItem from './TopCatItem';
import AddWideButton from '../../../common/buttons/AddWide';
import ErrorModal from '../../../common/messages/ErrorModal';
import Notification from '../../../common/messages/Notification';

import useStyles from './useStyles';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


export default () => {

    const dispatch = useDispatch();
    useEffect(() => {
        topCatActions.getAllTopCats()(dispatch);
    }, [dispatch]);

    const topCatsList = useSelector(state => state.topCats.topCats);
    const topCatsLoaded = useSelector(state => state.topCats.loaded);

    //server errors catching:
    const topCatsError = useSelector(state => state.topCats.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect(() => {
        if(topCatsError) {setErrorIsOpen(true)}
    },[topCatsError]
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
        ref.current(`Top category ${itemName.toUpperCase()} has been deleted from database!`);
        setTimeout(() => {
            window.location.reload(true)
        }, timeout)
    };

    const classes = useStyles();

    return (
        <>
        {
            topCatsLoaded ?
            (
                <List className={classes.root}>
                    {topCatsList
                        .map(item =>
                            <TopCatItem
                                item={item}
                                key={item._id}
                                handleNotification={handleNotification}
                            />
                        )
                    }
                    <Divider />
                    <ListItem>
                        <Link href="/admin/categories/top/newTopCategory" className={classes.center}>
                            <AddWideButton text='CREATE NEW TOP CATEGORY' color='secondary'/>
                        </Link>
                    </ListItem>
                </List>
                ) :
                <Spinner/>
        }
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        <ErrorModal modalIsOpen={errorIsOpen} modalText={errorModalText} doFunction={reloadPage} closeFunction={closeErrorModal}/>
        </>
    )
};
