import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as topCatActions from '../../../../store/actions/topCats';

import Spinner from '../../../common/Spinner';
import TopCatItem from './TopCatItem';
import AddWideButton from '../../../common/buttons/AddWide';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';


export default (props) => {

    const dispatch = useDispatch();
    const topCatsList = useSelector(state => state.topCats.topCats);
    const topCatsLoaded = useSelector(state => state.topCats.loaded);
    // const topCatsIsAdded = useSelector(state => state.topCats.isAdded);


    console.log(topCatsList);

    useEffect(() => {
        topCatActions.getAllTopCats()(dispatch);
    }, [dispatch]);

    const classes = useStyles();

    return (
        <>
        {
            !topCatsLoaded
                ? <Spinner/>
                : (
                <List className={classes.root}>
                    {topCatsList
                            .map(item =>
                                <TopCatItem
                                    item={item}
                                    key={item._id}
                                />
                            )
                    }
                    <Divider />
                    <ListItem>
                        <Link href="/admin/categories/top/newTopCategory" className={classes.center}>
                            <AddWideButton text='CREATE NEW TOP CATEGORY'/>
                        </Link>
                    </ListItem>
                </List>
                )
        }
        </>
    )
};
