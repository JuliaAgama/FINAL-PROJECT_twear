import React, { useRef }  from 'react';

import { Typography, Grid, List } from '@material-ui/core';

// import useStyles from './useStyles';

import ProductItem from './ProductItem';
import Notification from '../../../common/messages/Notification';


export default props => {

    const {productsList} = props;
    
    // notification after archiving or deleting item:
    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = (itemName, action) => {
        ref.current(`Product ${itemName.toUpperCase()} has been ${action}!`);
    };


    // const classes = useStyles();

    return (
        <>
            <Typography variant="h6" >Products</Typography>
            <List id='products-listing'>
                <Grid container spacing={3}>
                    {productsList.map(item =>
                        <ProductItem
                            item={item}
                            key={item._id}
                            handleNotification={handleNotification}
                        />
                    )}
                </Grid>
            </List>
            <Notification timeout={timeout} children={add => (ref.current = add)} />
        </>
    )
};
