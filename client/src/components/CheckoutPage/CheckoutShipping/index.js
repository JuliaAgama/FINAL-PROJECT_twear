// import React from 'react';
import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import clsx from 'clsx';
//
import {openLoginModalAction} from "../../../store/actions/modal";

import { Typography, Box, Grid,  TextField, FormControlLabel, Checkbox, FormLabel, FormControl, RadioGroup, Radio } from '@material-ui/core';

import useStyles from './useStyles';

import shippingOptionsBase from '../shippingOptionsBase';


export default props => {

    const {formData, infoIsOpen, shippingIsOpen, handleOnChangeShipping, onToCart, onToInfo, onToShipping, onToPayment, onPaymentAvailable} = props;

    const [shippingMethod, setShippingMethod] = useState({
        options: [],
        selected: null,
    });

    useEffect(() => {
        if (formData && formData.deliveryInfo  && formData.deliveryInfo.country) {
            setShippingMethod({
                options: shippingOptionsBase.filter(el => el.locations.some(elem => elem === formData.deliveryInfo.country))[0] ? shippingOptionsBase.filter(el => el.locations.some(elem => elem === formData.deliveryInfo.country)) : [shippingOptionsBase.find(el => el._id === 'other')],
                selected: formData.shipping
            });
        }
        return (() => {
            setShippingMethod({
                options: [],
                selected: null,
            });
        })
    }, [formData]);

    const onChangeShipping = event => {
        handleOnChangeShipping({
            ...shippingOptionsBase.find(el => el._id === event.target.value)
        });
    };

    const classes = useStyles();

    return (
        formData &&
        <div className={classes.root}>
            {shippingIsOpen ?
            <form autoComplete="off">
                <Grid container spacing={2} alignItems='center' className={classes.container} >
                    <Grid item xs={12}>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='left'>Shipping Method</Box>
                    </Grid>
                    {shippingMethod.options.map(item =>
                        <Grid item xs={12} container spacing={2}alignItems='center'key={item._id}>
                            <Grid item xs={9}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <RadioGroup aria-label="shippingMethod" name="shippingMethod">
                                        <FormControlLabel
                                            id={item._id}
                                            value={item._id}
                                            control={<Radio />}
                                            label={item.name}
                                            checked={formData.shipping && formData.shipping._id === item._id ? true : false}
                                            onChange={onChangeShipping}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>{item.price > 0 ? `$ ${item.price}` : 'Free'}</Grid>
                        </Grid>
                    )}
                    <Grid item xs={5}>
                        <Typography component="div" className={classes.btnRegular}>
                            <Box fontSize="body2.fontSize" onClick={onToInfo}>Return to Information</Box>
                        </Typography>
                    </Grid>
                    {onPaymentAvailable ?
                    <Grid item xs={7}>
                        <Typography component="div" className={classes.btnImportant}>
                            <Box fontSize="body2.fontSize" onClick={onToPayment}>Continue to Payment</Box>
                        </Typography>
                    </Grid> :
                    <Grid item xs={7}>
                        <Typography component="div" className={classes.btnLocked}>
                            <Box fontSize="body2.fontSize" >Continue to Payment</Box>
                        </Typography>
                    </Grid>
                    }
                </Grid>

            </form> :

            !infoIsOpen && <Grid container spacing={2} className={classes.briefContainer} alignItems='center'>
                <Grid item xs={3}>Shipping Method</Grid>
                <Grid item xs={4} sm={5} lg={6}>UPS delivery to home/company address (non-EU)</Grid>
                <Grid item xs={2}>Free</Grid>
                <Grid item xs={3} sm={2} lg={1}>
                    <Box className={classes.link} onClick={onToShipping}>Change</Box>
                </Grid>
            </Grid> || ''
            }
        </div>
    )
};
