import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Box, List, ListItem, Divider } from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../../common/Spinner';
import CategoryItem from './CategoryItem';
import AddWideButton from '../../../common/buttons/AddWide';
import Notification from '../../../common/messages/Notification';


export default props => {

    const {topCatId} = props;

    const categoriesList = useSelector(state => state.categories.categories);
    const categoriesLoaded = useSelector(state => state.categories.loaded);

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
                            .map(item => item.topCategory._id === topCatId ?
                                <CategoryItem
                                    item={item}
                                    key={item._id}
                                    handleNotification={handleNotification}
                                /> :
                                <div key={Math.random()}></div>
                            )
                        }
                        <Divider />
                        <ListItem>
                            <Link to={`/admin/categories/newCategory-${topCatId}`} className={classes.link}>
                                <AddWideButton text='ADD MORE' color='primary'/>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
                )
        }
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        </>
    )
};
