import React, {useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
// import {useDispatch, useSelector} from "react-redux";
import {CardElement, injectStripe} from 'react-stripe-elements';

import { Typography, Box, Grid} from '@material-ui/core';

import useStyles from './useStyles';


export default injectStripe( () => {

    const history = useHistory();

    const [orderTotal, setOrderTotal] = useState(0);
    const [onPayAvailable, setOnPayAvailable] = useState(false);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    console.log('get order from redux (useSelector)');
    const order = {
        products: [
            {quantity: 1,
            product: {
                price: 350
            }},
            {quantity: 2,
            product: {
                price: 89
            }},
        ],
        shipping: {
            price: 10
        },
    };

    useEffect(() => {
        setOnPayAvailable(true);
        if (order) {
            setOrderTotal(order.products.reduce((sum, el) => sum + el.product.price * el.quantity, 0) + order.shipping.price);
        }
        return (() => {
            setOnPayAvailable(false);
            setOrderTotal(0);
        });
    }, [order]);


    const onToCheckout = () => {
        history.push('/checkout');
    }

    const onPay = async event => {
        event.preventDefault();
        setPaymentCompleted(true);
        console.log('User clicked submit');
        console.log('Send e-mail');
        console.log('Change order status and update order in database');
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {!paymentCompleted ?
                <Grid container spacing={2} justify='center' alignItems='center' className={classes.container} >
                    <Grid item xs={12}>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='center'>Complete Payment</Box>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='center'>Your order: ${orderTotal}</Box>
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
                        <Box fontSize="h6.fontSize" pt={3} textAlign='center'>Check your email for the receipt</Box>
                        <Link to="/" >
                            <Box fontSize="body1.fontSize" pt={3} textAlign='center' className={classes.link}>Continue shopping</Box>
                        </Link>
                    </Grid>
                </Grid>
            }
        </div>
    )
});
