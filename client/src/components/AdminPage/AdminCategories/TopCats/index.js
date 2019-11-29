import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Link, List, ListItem, Divider, Hidden } from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../../common/Spinner';
import TopCatItem from './TopCatItem';
import AddWideButton from '../../../common/buttons/AddWide';
import Notification from '../../../common/messages/Notification';


export default () => {

    const topCatsList = useSelector(state => state.topCats.topCats);
    const topCatsLoaded = useSelector(state => state.topCats.loaded);

    // notification after deleting item:
    const ref = useRef(null);
    const timeout = 2000;

    const handleNotification = (itemName) => {
        ref.current(`Top category ${itemName.toUpperCase()} has been deleted from database!`);
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
                        <Hidden xsDown>
                            <AddWideButton text='CREATE NEW TOP CATEGORY' color='secondary'/>
                        </Hidden>
                        <Hidden smUp>
                            <AddWideButton text='NEW TOP CATEGORY' color='secondary'/>
                        </Hidden>
                        </Link>
                    </ListItem>
                </List>
                ) :
                <Spinner/>
        }
        <Notification
            timeout={timeout}
            children={add => (ref.current = add)}
        />
        </>
    )
};
