import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {  useHistory } from 'react-router-dom';
import clsx from 'clsx';

import * as cartActions from '../../../store/actions/cart';
import {openLoginModalAction} from "../../../store/actions/modal";

import { Typography, Box, Grid, Hidden, Breadcrumbs, OutlinedInput, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import useStyles from './useStyles';

import Modal from '../../common/modals/Modal';


export default () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const customerLoaded = useSelector(state => state.customers.loaded);
    const {customer} = useSelector(state => state.customers);
    const {cart} = useSelector(state => state.cart);
    // const order = useSelector(state => state.orders.orderItem);

    const [onShipppingAvailable, setOnShippingAvailable] = useState(false);
    const [formData, setFormData] = useState({subscribe: false, saveLocal: false}); //будет включать в себя как данные для ордера, так и другие

    console.log(customer)

    useEffect (() => {
        const validateFields = formData => {
            return true;
        };
        validateFields() ? setOnShippingAvailable(true) : setOnShippingAvailable(false);
    }, [formData])

    // useEffect (() => {
    //     dispatch(ordersActions.getOrderItem());
    // }, [dispatch])

    useEffect(() => {
        setFormData({
            ...formData,
            products: cart.products
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

    const openLogin = () => {
        !customerLoaded && dispatch(openLoginModalAction());
    };

    const onChange = event => {
        // event.preventDefault();
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

    const handleOnSubmit = event => {
        // event.preventDefault();
        // dispatch(ordersActions.updateOrder(formData));
        console.log('saved formData')
    };

    const onToShipping = () => {
        handleOnSubmit();
        history.push('/checkout/shipping');
    };

    const onToCart = () => {
        handleOnSubmit();
        history.push('/cart');
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={classes.breadcrumb}>
                <Box className={classes.breadcrumbLink} onClick={onToCart}>Cart</Box>
                <Box fontSize='body2.fontSize' className={classes.breadcrumbActive}>Information</Box>
                {onShipppingAvailable ?
                    <Box className={classes.breadcrumbLink} onClick={onToShipping}>Shipping</Box> :
                    <Box className={classes.breadcrumbLocked}>Shipping</Box>
                }
                <Box className={classes.breadcrumbLocked}>Payment</Box>
            </Breadcrumbs>

            <form autoComplete="off">
                <Grid container spacing={1} alignItems='center'>
                    <Grid item xs={7}>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='left'>Contact information</Box>
                    </Grid>
                    <Grid item xs={5}>
                        {!customerLoaded && <Box fontSize={14} pt={3} textAlign='right'>Already have an account? <span className={classes.loginLink} onClick={openLogin}> Log in</span></Box>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            required
                            id="email"
                            label="Email"
                            name='email'
                            type='email'
                            value={formData.customer && formData.customer.email || '' }
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel style={{color: '#666', fontSize: '14px'}} control={
                            <Checkbox
                                name='subscribe'
                                checked={formData.subscribe ? true : false}
                                onChange={onChange}
                                value='subscribe'
                                color="default"
                            />
                            }
                            label="Keep me up to date on news and exclusive offers"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='left'>Shipping address</Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            className={classes.textField}
                            required
                            id="firstName"
                            label="First Name"
                            name='firstName'
                            type='text'
                            value={formData.customer && formData.customer.firstName || '' }
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            className={classes.textField}
                            required
                            id="lastName"
                            label="Last Name"
                            name='lastName'
                            type='text'
                            value={formData.customer && customer.lastName || '' }
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            required
                            multiline
                            rowsMax='3'
                            id="address"
                            label="Address"
                            name='address'
                            type='text'
                            value={formData.customer && formData.customer.deliveryAddress && formData.customer.deliveryAddress.address || '' }
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            className={classes.textField}
                            required
                            id="city"
                            label="City / Region"
                            name='city'
                            type='text'
                            value={formData.customer && formData.customer.deliveryAddress && formData.customer.deliveryAddress.city || '' }
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            className={classes.textField}
                            required
                            id="postal"
                            label="Postal Code"
                            name='postal'
                            type='text'
                            value={formData.customer && formData.customer.deliveryAddress && formData.customer.deliveryAddress.postal || '' }
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className={classes.textField}
                            required
                            id="country"
                            label="Country"
                            name='country'
                            type='text'
                            value={formData.customer && formData.customer.deliveryAddress && formData.customer.deliveryAddress.country || '' }
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className={classes.textField}
                            required
                            id="telephone"
                            label="Phone Number"
                            name='telephone'
                            type='text'
                            placeholder='+XXX (XX) XXX XX XX'
                            value={formData.customer && formData.customer.telephone || '' }
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    {!customerLoaded &&
                        <Grid item xs={12}>
                            <FormControlLabel style={{color: '#666', fontSize: '14px'}} control={
                                <Checkbox
                                    name='saveLocal'
                                    checked={formData.saveLocal ? true : false}
                                    onChange={onChange}
                                    value='saveLocal'
                                    color="default"
                                />
                                }
                                label="Save this information for next time"
                            />
                        </Grid>
                    }

                    <Grid item xs={5}>
                        <Typography component="div" className={classes.btnRegular}>
                            <Box fontSize="body2.fontSize" onClick={onToCart}>Return to Cart</Box>
                        </Typography>
                    </Grid>
                    {onShipppingAvailable &&
                    <Grid item xs={7}>
                        <Typography component="div" className={classes.btnImportant}>
                            <Box fontSize="body2.fontSize" onClick={onToShipping}>Continue to Shipping</Box>
                        </Typography>
                    </Grid>
                    }
                </Grid>
            </form>
            <Modal/>
        </div>
    )
};
