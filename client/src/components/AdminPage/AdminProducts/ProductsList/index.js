import React, { useRef, useState, useEffect }  from 'react';

import { Typography, Grid, List } from '@material-ui/core';

import useStyles from './useStyles';

import useInfiniteScroll from '../../../../utils/useInfiniteScroll';

import ProductItem from './ProductItem';
import Notification from '../../../common/messages/Notification';


export default props => {

    const {productsList} = props;

    const [listItems, setListItems] = useState(productsList.filter((el, ind) => ind < 6));
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    // console.log('listItems: ', listItems);

    function fetchMoreListItems() {
        // setTimeout(() => {
            setListItems(prevState => ([...prevState, ...productsList.filter((el, ind) => ind >= prevState.length && ind < prevState.length + 6)]));
            setIsFetching(false);
        // }, 500);
    };

    // notification after archiving or deleting item:
    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = (itemName, action) => {
        ref.current(`Product ${itemName.toUpperCase()} has been ${action}!`);
    };


    const classes = useStyles();

    return (
        <>
            <Typography variant="h6" >Products</Typography>
            <List id='products-listing'>
                <Grid container spacing={3}>
                    {listItems.map(item =>
                        <ProductItem
                            item={item}
                            key={item._id}
                            handleNotification={handleNotification}
                        />
                    )}
                {isFetching && listItems.length <productsList.length && <Grid item xs={12} className={classes.inform}>...loading more products...</Grid>}
                </Grid>
            </List>
            <Notification timeout={timeout} children={add => (ref.current = add)} />
        </>
    )
};
