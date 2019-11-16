import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as topCatActions from '../../../../store/actions/topCats';

import Spinner from '../../../common/Spinner';
import TopCatItem from './TopCatItem';
import AddWideButton from '../../../common/buttons/AddWide';
import Notification from '../../../common/messages/Notification';

import useStyles from './useStyles';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


export default () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const topCatsList = useSelector(state => state.topCats.topCats);
    const topCatsLoaded = useSelector(state => state.topCats.loaded);

    useEffect(() => {
        topCatActions.getAllTopCats()(dispatch);
    }, [dispatch]);

    const ref = useRef(null);
    const timeout = 2000;

    const handleNotification = (itemName) => {
        ref.current(`Top category ${itemName.toUpperCase()} has been deleted from database!`);
        setTimeout(() => {
            window.location.reload(true)
        }, timeout)
    };


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
        </>
    )
};
