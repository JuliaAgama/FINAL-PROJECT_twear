import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as categoriesActions from '../../../../store/actions/categories';

import Spinner from '../../../common/Spinner';
import CategoryItem from './CategotyItem';
import AddWideButton from '../../../common/buttons/AddWide';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';



export default props => {

    const {topCatId} = props;

    const dispatch = useDispatch();
    const categoriesList = useSelector(state => state.categories.categories);
    const categoriesLoaded = useSelector(state => state.categories.loaded);
    // const categoriesIsAdded = useSelector(state => state.categories.isAdded);

    useEffect(() => {
        categoriesActions.getAllCategories()(dispatch);
    }, [dispatch]);


    const classes = useStyles();

    return (
        <>
        {
            !categoriesLoaded
                ? <Spinner/>
                : (
                <Box color="primary.main">
                    <List className={classes.root}>
                        {categoriesList
                            .map(item => {
                                if(item.topCatId === topCatId) {
                                    return <CategoryItem
                                        item={item}
                                        key={item._id}
                                    />
                                }
                            }
                            )
                        }
                        <Divider />
                        <ListItem>
                            <Link href="/admin/categories/newCategory" className={classes.center}>
                                <AddWideButton text='ADD MORE CATEGORIES'/>
                            </Link>
                        </ListItem>
                    </List>

                </Box>

                )
        }
        </>
    )
};
