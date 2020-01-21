// import React from 'react';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import clsx from 'clsx';
import countryList from 'react-select-country-list'
//
import {openLoginModalAction} from "../../../store/actions/modal";

import { Typography, Box, Grid,  TextField, FormControlLabel, Checkbox } from '@material-ui/core';

import useStyles from './useStyles';

import Selector from '../../common/inputs/Selector';
import Modal from '../../common/modals/Modal';


export default props => {

    const {formData, infoIsOpen, handleOnChange, handleOnChangeCountry, onToCart, onToInfo, onToShipping, onShipppingAvailable} = props;

    const countriesList = countryList().getData();
    const [countries, setCountries] = useState({
        options: [],
        selectedCountry: '',
    });

    useEffect(() => {
        if (countriesList && formData && formData.deliveryInfo) {
            setCountries({
                options: countriesList.map(el => {return {name: el.label, _id: el.label}}),
                selectedCountry: formData.deliveryInfo.country});
        }
        return (() => {
            setCountries({
                options: [],
                selectedCountry: '',
            });
        })
    }, [formData, countriesList])

    const dispatch = useDispatch();

    const customerLoaded = useSelector(state => state.customers.loaded);

    const openLogin = () => {
        !customerLoaded && dispatch(openLoginModalAction('login'));
    };

    const onChange = event => {
        handleOnChange(event);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {infoIsOpen ?
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
                            value={formData.email ? formData.email : '' }
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
                            //defaultValue={formData.deliveryInfo ? formData.deliveryInfo.firstName : ''}
                            value={formData.deliveryInfo ? formData.deliveryInfo.firstName : ''}
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
                            //defaultValue={formData.deliveryInfo ? formData.deliveryInfo.lastName : ''}
                            value={formData.deliveryInfo ? formData.deliveryInfo.lastName : ''}
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
                            value={formData.deliveryInfo ? formData.deliveryInfo.address : ''}
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
                            defaultValue={formData.deliveryInfo ? formData.deliveryInfo.city : ''}
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
                            defaultValue={formData.deliveryInfo ? formData.deliveryInfo.postal : ''}
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {countries && countries.options && <Selector
                            selectorName='Country'
                            selectorArr={countries.options}
                            selectedItem={countries.selectedCountry}
                            onChange={handleOnChangeCountry}
                        />}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className={classes.textField}
                            required
                            id="telephone"
                            label="Phone Number"
                            name='telephone'
                            type='text'
                            placeholder='+XX-XXX-XXX-XXXX'
                            //defaultValue={formData.deliveryInfo ? formData.deliveryInfo.telephone : ''}
                            value={formData.deliveryInfo ? formData.deliveryInfo.telephone : ''}
                            onChange={onChange}
                            onFocus={onChange}
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
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

                    <Grid item xs={5}>
                        <Typography component="div" className={classes.btnRegular}>
                            <Box fontSize="body2.fontSize" textAlign="center" onClick={onToCart}>Return to Cart</Box>
                        </Typography>
                    </Grid>
                    {onShipppingAvailable ?
                    <Grid item xs={7}>
                        <Typography component="div" className={classes.btnImportant}>
                            <Box fontSize="body2.fontSize" textAlign="center" onClick={onToShipping}>Continue to Shipping</Box>
                        </Typography>
                    </Grid> :
                    <Grid item xs={7}>
                        <Typography component="div" className={classes.btnLocked}>
                            <Box fontSize="body2.fontSize" textAlign="center" >Continue to Shipping</Box>
                        </Typography>
                    </Grid>
                    }
                </Grid>
            </form> :
            <Grid container spacing={2} className={classes.briefContainer} alignItems='center'>
                <Grid item xs={3}>Contact</Grid>
                <Grid item xs={6} sm={7} lg={8}>{formData.email}</Grid>
                <Grid item xs={3} sm={2} lg={1}>
                    <Box className={classes.link} onClick={onToInfo}>Change</Box>
                </Grid>
                <Grid item xs={3}>Ship to</Grid>
                {formData.deliveryInfo &&
                    <Grid item xs={6} sm={7} lg={8}>{formData.deliveryInfo.address}, {formData.deliveryInfo.city}, {formData.deliveryInfo.postal}, {formData.deliveryInfo.country}</Grid>
                }
                <Grid item xs={3} sm={2} lg={1}>
                    <Box className={classes.link} onClick={onToInfo}>Change</Box>
                </Grid>
            </Grid>
            }
            <Modal/>
        </div>
    )
};
