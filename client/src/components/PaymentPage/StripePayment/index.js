import React, {useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {CardElement, injectStripe} from 'react-stripe-elements';

import * as cartActions from '../../../store/actions/cart';
import * as ordersActions from '../../../store/actions/orders';
import OrdersApi from '../../../services/Orders';

import { Typography, Box, Grid} from '@material-ui/core';

import useStyles from './useStyles';


export default injectStripe( () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const order = useSelector(state => state.orderItem.orderItem);

    const [onPayAvailable, setOnPayAvailable] = useState(false);
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    useEffect(() => {
        setOnPayAvailable(true);
        return (() => {
            setOnPayAvailable(false);
        });
    }, [order]);

    const onToCheckout = () => {
        history.push('/checkout');
    };

    const onPay = event => {
        event.preventDefault();
        // console.log('Complete payment, check if paid');
        setPaymentCompleted(true);

        (new OrdersApi).addOrder({
            customer: order.customer || null,
            products: order.products,
            deliveryInfo: order.deliveryInfo,
            shipping: order.shipping,
            paymentInfo: order.paymentInfo,
            totalSum: order.totalSum,
            status: 'paid',
            email: order.email,
        }).then(res => {
            dispatch(ordersActions.getOrderItem(res));
            return res;
        }).then(res => {
            dispatch(cartActions.updateCart({products: []}));
            return res;
        });
        // console.log('Send e-mail');
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {!paymentCompleted ?
                <Grid container spacing={2} justify='center' alignItems='center' className={classes.container} >
                    <Grid item xs={12}>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='center'>Complete Payment</Box>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='center'>Your order: $ {order.totalSum}</Box>
                        <Box fontSize="h6.fontSize" py={3} mb={3} textAlign='center' >
                            <CardElement />
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography component="div" className={classes.btnRegular}>
                            <Box fontSize="body2.fontSize" onClick={onToCheckout}>Return to Checkout</Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                    {onPayAvailable ?
                        <Typography component="div" className={classes.btnImportant}>
                            <Box fontSize="body2.fontSize" onClick={onPay}>Pay</Box>
                        </Typography> :
                        <Typography component="div" className={classes.btnLocked}>
                            <Box fontSize="body2.fontSize">Pay</Box>
                        </Typography>
                    }
                    </Grid>
                </Grid> :
                <Grid container spacing={2} justify='center' alignItems='center' className={classes.container} >
                    <Grid item xs={12}>
                        <Box fontSize="h4.fontSize" pt={3} textAlign='center'>PAYMENT IS COMPLETED</Box>
                        <Box className={classes.logo} textAlign='center'>
                            <img className={classes.image} src="/img/payment-card-e-commerce-paid.png" alt="NOT FOUND"/>
                        </Box>
                        {order && order.orderNo && <Box fontSize="h4.fontSize" pt={3} textAlign='center'>YOUR ORDER No: {order.orderNo}</Box>}
                        <Box fontSize="h6.fontSize" pt={3} textAlign='center'>Check your email for the receipt</Box>
                        <Link to="/" >
                            <Box fontSize="body1.fontSize" pt={3} textAlign='center' className={classes.link}>Continue shopping</Box>
                        </Link>
                        {order.customer && <Link to="/personalCabinet" >
                            <Box fontSize="body1.fontSize" pt={3} textAlign='center' className={classes.link}>Check your orders on your personal page</Box>
                        </Link>}
                    </Grid>
                </Grid>
            }
        </div>
    )
});
