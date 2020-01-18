import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";

import { Box, Grid } from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../common/Spinner';
import CartItem from './CartItem';
import Currency from "../../common/Currency";


export default props => {
    const {calcTotalCart, shipping} = props;

    const {cart} = useSelector(state => state.cart);

    const [subtotal, setSubtotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0)

    calcTotalCart(subtotal+shippingCost);

    useEffect(() => {
        if (cart.products && cart.products.length > 0 && cart.products.reduce(((sum, el) => sum + el.quantity), 0) > 0) {
            setSubtotal(cart.products.reduce(((sum, el) => sum + el.product.price * el.quantity), 0));
        };
        if (shipping) {
            setShippingCost(shipping.price);
        }
    }, [cart, shipping]);

    const classes = useStyles();

    return (
        <Box mb={3}>
            {cart.products && cart.products.length > 0 ?
            <>
                <Box className={classes.cart}>
                    {cart && cart.products ?
                    cart.products.map(item =>
                        item.product.colors && item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity > 0 &&
                        <Grid container justify="space-between" alignItems="flex-start" className={classes.skuContainer}
                            key={item.product._id+item.color._id+item.size._id}
                        >
                            <CartItem item={item}/>
                        </Grid>
                    ) : <Spinner/>}
                </Box>
                <Grid container spacing={1} justify="space-between" alignItems="flex-end" style={{borderTop: '1px solid #999', borderBottom: '1px solid #999', paddingTop: '8px', paddingBoddom: '8px'}}>
                    <Grid item xs={6}>
                        <Box fontSize='body2.fontSize' textAlign='left' p={1}>Subtotal:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontSize='body1.fontSize' textAlign='right' p={1}><Currency price={subtotal}/></Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontSize='body2.fontSize' textAlign='left' p={1}>Shipping:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontSize='body1.fontSize' textAlign='right' p={1}> {shippingCost > 0 ? <Currency price={shippingCost}/> : 'Free'} </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="space-between" alignItems="flex-end">
                    <Grid item xs={6}>
                        <Box fontSize='body1.fontSize' textAlign='left' p={1}>Total:</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontSize='h6.fontSize' textAlign='right' p={1}><Currency price={subtotal + shippingCost} /></Box>
                    </Grid>
                </Grid>
            </> : <Box className={classes.cartEmpty}> No products in your cart. Go shopping!</Box>
            }
        </Box>
    )
};
