import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

import { List, Divider } from '@material-ui/core';
// import { List, ListItem, Divider, Hidden, Tooltip } from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../../common/Spinner';
import TopCatItem from './TopCatItem';
// import AddWideButton from '../../../common/buttons/AddWide';
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
                    {/* <ListItem>
                        <Tooltip title="NOT ALLOWED TO ADD NEW TOP-CATEGORY">
                            <Link to="/admin/categories" className={classes.link}>
                            <Hidden xsDown>
                                <AddWideButton text='CREATE NEW TOP CATEGORY' color='secondary'/>
                            </Hidden>
                            <Hidden smUp>
                                <AddWideButton text='NEW TOP CATEGORY' color='secondary'/>
                            </Hidden>
                            </Link>
                        </Tooltip>
                    </ListItem> */}
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
