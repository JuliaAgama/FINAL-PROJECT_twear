import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {  useHistory } from 'react-router-dom';
import clsx from 'clsx';

import * as cartActions from '../../store/actions/cart';
import {openLoginModalAction} from "../../store/actions/modal";

import { Typography, Box, Grid, Hidden, Breadcrumbs, OutlinedInput, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import useStyles from './useStyles';

import CheckoutInfo from './CheckoutInfo';
// import Modal from '../common/modals/Modal';


export default () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const customerLoaded = useSelector(state => state.customers.loaded);
    const {customer} = useSelector(state => state.customers);
    const {cart} = useSelector(state => state.cart);
    // const order = useSelector(state => state.orders.orderItem);

    const [infoIsOpen, setInfoIsOpen] = useState(false);
    const [shippingIsOpen, setShippingIsOpen] = useState(false);
    const [paymentIsOpen, setPaymentIsOpen] = useState(false);

    const [onShipppingAvailable, setOnShippingAvailable] = useState(false);
    const [onPaymentAvailable, setOnPaymentAvailable] = useState(false);

    const [formData, setFormData] = useState({subscribe: false, saveLocal: false}); //данные для ордера

    // console.log(customer);

    useEffect(() => {
        setInfoIsOpen(true);
        setFormData({
            ...formData,
            products: [...cart.products]
        });
        if (customerLoaded) {
            // dispatch(cartActions.getCart(cart));
            setFormData({
                customer: customer,
                email: customer.email || '',
                telephone: customer.telephone || '',
                deliveryAddress: customer.address || {}
            })
        };
        // dispatch(ordersActions.createOrder(formData));
        return ( () => {
            setFormData({subscribe: false, saveLocal: false});
        })
    }, [customerLoaded]);
    // }, [dispatch, customerLoaded]);


    useEffect (() => {
        const validateInfoFields = formData => {
            return true;
        };
        const validateShippingFields = formData => {
            return true;
        };
        validateInfoFields() ? setOnShippingAvailable(true) : setOnShippingAvailable(false);
        validateShippingFields() ? setOnPaymentAvailable(true) : setOnPaymentAvailable(false);
    }, [formData])

    // useEffect (() => {
    //     dispatch(ordersActions.getOrderItem());
    // }, [dispatch])

    const handleOnChange = event => {
        if (event.target.name === 'subscribe') {
            setFormData({
                ...formData,
                subscribe: !formData.subscribe
            })
        } else if (event.target.name === 'saveLocal') {
            setFormData({
                ...formData,
                saveLocal: !formData.saveLocal
            });
        } else if (['address', 'city', 'country', 'postal'].some(el => el === event.target.name)) {
            setFormData({
                ...formData,
                deliveryAddress: {
                    ...formData.deliveryAddress,
                    [event.target.name]: event.target.value
                }
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    };

    const handleOnSaveData = event => {
        // event.preventDefault();
        // dispatch(ordersActions.updateOrder(formData));
        localStorage.setItem('orderDara', formData);
        console.log('saved formData')
    };

    const onToCart = () => {
        handleOnSaveData();
        history.push('/cart');
    };

    const onToShipping = () => {
        handleOnSaveData();
        setInfoIsOpen(false);
        setShippingIsOpen(true);
        setPaymentIsOpen(false);
    };

    const onToPayment = () => {
        handleOnSaveData();
        setInfoIsOpen(false);
        setShippingIsOpen(false);
        setPaymentIsOpen(true);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={classes.breadcrumb}>
                <Box className={classes.breadcrumbLink} onClick={onToCart}>Cart</Box>
                <Box fontSize='body2.fontSize' className={infoIsOpen ? classes.breadcrumbActive : classes.breadcrumbLink}>Information</Box>
                {shippingIsOpen ?
                    <Box className={classes.breadcrumbLink} onClick={onToShipping}>Shipping</Box> :
                    onShipppingAvailable ?
                        <Box className={classes.breadcrumbLink}>Shipping</Box> :
                        <Box className={classes.breadcrumbLocked}>Shipping</Box>
                }
                {paymentIsOpen ?
                    <Box className={classes.breadcrumbLink} onClick={onToPayment}>Payment</Box> :
                    onPaymentAvailable ?
                        <Box className={classes.breadcrumbLink} onClick={onToPayment}>Payment</Box> :
                        <Box className={classes.breadcrumbLocked}>Payment</Box>
                }
            </Breadcrumbs>
            <CheckoutInfo
                formData={formData}
                infoIsOpen={infoIsOpen}
                handleOnChange={handleOnChange}
                onToCart={onToCart}
                onToShipping={onToShipping}
                onShipppingAvailable={onShipppingAvailable}
            />
            {/* <Modal/> */}
        </div>
    )
};
