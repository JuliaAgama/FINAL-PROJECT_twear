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
import CheckoutShipping from './CheckoutShipping';


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

    const [formData, setFormData] = useState({subscribe: false, saveLocal: false});

    // console.log(formData);

    useEffect(() => {
        setInfoIsOpen(true);
        setShippingIsOpen(false);
        setPaymentIsOpen(false);
        setFormData({
            ...formData,
            products: [...cart.products]
        });
        if (customerLoaded) {
            setFormData({
                ...formData,
                customer: {...customer},
                email: customer.email,
                deliveryInfo: {
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    telephone: customer.telephone
                }
            });
        };
        if (localStorage.getItem('deliveryInfoLocal')) {
            let localData = JSON.parse(localStorage.getItem('deliveryInfoLocal'))
            setFormData({
                ...formData,
                email: customerLoaded ? customer.email : formData.email || '',
                deliveryInfo: {...localData}
            })
        };
        return ( () => {
            setFormData({subscribe: false, saveLocal: false});
        })
    }, [customerLoaded]);

    useEffect (() => {
        const validateInfoFields = () => {
            if (formData.email
                && formData.email.match(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/)
                && formData.deliveryInfo
                && formData.deliveryInfo.firstName
                && formData.deliveryInfo.lastName
                && formData.deliveryInfo.address
                && formData.deliveryInfo.city
                && formData.deliveryInfo.postal
                && formData.deliveryInfo.telephone
                && formData.deliveryInfo.telephone.match(/^([\(\+])?([0-9]{1,3}([\s])?)?([\+|\(|\-|\)|\s])?([0-9]{2,4})([\-|\)|\.|\s]([\s])?)?([0-9]{2,4})?([\.|\-|\s])?([0-9]{2,8})?([\.|\-|\s])?([0-9]{2,8})$/)
                ) {
                return true;
            }
            return false;
        };
        const validateShippingFields = () => { // прописать проверку пустых и некорректных вводов
            return false;
        };
        validateInfoFields() ? setOnShippingAvailable(true) : setOnShippingAvailable(false);
        validateInfoFields() && validateShippingFields() ? setOnPaymentAvailable(true) : setOnPaymentAvailable(false);
        return ( () => {
            setOnShippingAvailable(false);
            setOnPaymentAvailable(false);
        })
    }, [formData])

    const handleOnChange = event => {
        if (['subscribe', 'saveLocal'].some(el => el === event.target.name)) {
            setFormData({
                ...formData,
                [event.target.name]: !formData[event.target.name]
            })
        } else if (['firstName', 'lastName', 'address', 'city', 'postal', 'country', 'telephone'].some(el => el === event.target.name)) {
            setFormData({
                ...formData,
                deliveryInfo: {
                    ...formData.deliveryInfo,
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

    const handleOnSaveLocalDeliveryInfo = () => {
        formData.saveLocal ? localStorage.setItem('deliveryInfoLocal', JSON.stringify({...formData.deliveryInfo})) : localStorage.removeItem('deliveryInfoLocal');
    };

    const onToCart = () => {
        handleOnSaveLocalDeliveryInfo();
        history.push('/cart');
    };

    const onToInfo = () => {
        setInfoIsOpen(true);
        setShippingIsOpen(false);
        setPaymentIsOpen(false);
    };

    const onToShipping = () => {
        handleOnSaveLocalDeliveryInfo();
        setInfoIsOpen(false);
        setShippingIsOpen(true);
        setPaymentIsOpen(false);
    };

    const onToPayment = () => {
        setInfoIsOpen(false);
        setShippingIsOpen(false);
        setPaymentIsOpen(true);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={classes.breadcrumb}>
                <Box className={classes.breadcrumbLink} onClick={onToCart}>Cart</Box>
                {infoIsOpen ?
                    <Box fontSize='body2.fontSize' className={classes.breadcrumbActive}>Information</Box> :
                    <Box className={classes.breadcrumbLink} onClick={onToInfo}>Information</Box>
                }
                {shippingIsOpen ?
                    <Box fontSize='body2.fontSize' className={classes.breadcrumbActive}>Shipping</Box> :
                    onShipppingAvailable ?
                        <Box className={classes.breadcrumbLink} onClick={onToShipping}>Shipping</Box> :
                        <Box className={classes.breadcrumbLocked}>Shipping</Box>
                }
                {paymentIsOpen ?
                    <Box fontSize='body2.fontSize' className={classes.breadcrumbActive}>Payment</Box> :
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
                onToInfo={onToInfo}
                onToShipping={onToShipping}
                onShipppingAvailable={onShipppingAvailable}
            />
            <CheckoutShipping
                formData={formData}
                infoIsOpen={infoIsOpen}
                shippingIsOpen={shippingIsOpen}
                handleOnChange={handleOnChange}
                onToCart={onToCart}
                onToInfo={onToInfo}
                onToShipping={onToShipping}
                onToPayment={onToPayment}
                onPaymentAvailable={onPaymentAvailable}
            />
        </div>
    )
};
