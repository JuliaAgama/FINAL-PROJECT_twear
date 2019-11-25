import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../../common/Spinner';
import TopCatItem from './TopCatItem';
import AddWideButton from '../../../common/buttons/AddWide';
import Notification from '../../../common/messages/Notification';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';


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
                            <AddWideButton text='CREATE NEW TOP CATEGORY' color='secondary'/>
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
