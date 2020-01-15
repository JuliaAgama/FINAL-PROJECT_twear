import React from 'react';
import {useSelector} from "react-redux";
import clsx from 'clsx';
//
import {openLoginModalAction} from "../../../store/actions/modal";

import { Typography, Box, Grid,  TextField, FormControlLabel, Checkbox } from '@material-ui/core';

import useStyles from './useStyles';


export default props => {

    const {formData, infoIsOpen, shippingIsOpen, handleOnChange, onToCart, onToInfo, onToShipping, onToPayment, onPaymentAvailable} = props;

    const customerLoaded = useSelector(state => state.customers.loaded);

    const onChange = event => {
        handleOnChange(event);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {shippingIsOpen ?
            <form autoComplete="off">
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={12}>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='left'>Shipping Method</Box>
                    </Grid>
                    <Grid item xs={12} container spacing={2} className={classes.briefContainer} alignItems='center'>
                        <Grid item xs={7} sm={8} lg={9}>
                            <FormControlLabel style={{color: '#666', fontSize: '14px'}} control={
                                <Checkbox
                                    name='shippingMethod'
                                    checked={formData.ups ? true : false}
                                    onChange={onChange}
                                    value='ups'
                                    color="default"
                                />
                                }
                                label="	UPS delivery to home/company address (non-EU)"
                            />
                        </Grid>
                        <Grid item xs={2}>Free</Grid>
                    </Grid>
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
                <Grid item xs={6} sm={7} lg={8}>UPS delivery to home/company address (non-EU)</Grid>
                <Grid item xs={1}>Free</Grid>
                <Grid item xs={3} sm={2} lg={1}>
                    <Box className={classes.link} onClick={onToShipping}>Change</Box>
                </Grid>
            </Grid> || ''
            }
        </div>
    )
};
