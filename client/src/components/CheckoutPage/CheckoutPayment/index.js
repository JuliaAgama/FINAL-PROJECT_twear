import React from 'react';

import { Typography, Box, Grid, FormControlLabel, FormControl, RadioGroup, Radio } from '@material-ui/core';

import useStyles from './useStyles';



export default props => {

    const {formData, infoIsOpen, shippingIsOpen, paymentIsOpen, onToShipping, onToPayment, onToComplete, onCompleteAvailable} = props;
    // const {formData, infoIsOpen, shippingIsOpen, paymentIsOpen, handleOnChangePayment, onToShipping, onToPayment, onToComplete, onCompleteAvailable} = props;

    const classes = useStyles();

    return (
        formData &&
        <div className={classes.root}>
            {paymentIsOpen ?
            <form autoComplete="off">
                <Grid container spacing={2} alignItems='center' className={classes.container} >
                    <Grid item xs={12}>
                        <Box fontSize="h6.fontSize" pt={3} textAlign='left'>Payment</Box>
                    </Grid>
                    <Grid item xs={12} className={classes.paymentContainer}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup aria-label="paymentMethod" name="paymentMethod">
                                <FormControlLabel
                                    id='bankingCard'
                                    value='bankingCard'
                                    control={<Radio />}
                                    label='Banking Card'
                                    checked={true}
                                    //onChange={}
                                />
                            </RadioGroup>
                        </FormControl>
                        <Box className={classes.logo} textAlign='center'>
                            <img className={classes.image} src="/img/payment-card-credit-card-money-payment.png" alt="NOT FOUND"/>
                        </Box>
                        <Box fontSize='body2.fontSize' textAlign='center' px={10} py={1}>After clicking “Complete order”, you will be redirected to complete your purchase securely.</Box>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography component="div" className={classes.btnRegular}>
                            <Box fontSize="body2.fontSize" onClick={onToShipping} textAlign="center" >Return to Shipping</Box>
                        </Typography>
                    </Grid>
                    {onCompleteAvailable ?
                    <Grid item xs={7}>
                        <Typography component="div" className={classes.btnImportant}>
                            <Box fontSize="body2.fontSize" onClick={onToComplete} textAlign="center" >Complete Order</Box>
                        </Typography>
                    </Grid> :
                    <Grid item xs={7}>
                        <Typography component="div" className={classes.btnLocked}>
                            <Box fontSize="body2.fontSize" textAlign="center" >Complete Order</Box>
                        </Typography>
                    </Grid>
                    }
                </Grid>
            </form> :

            (!infoIsOpen && !shippingIsOpen && <Grid container spacing={2} className={classes.briefContainer} alignItems='center'>
                <Grid item xs={3}>Shipping Method</Grid>
                <Grid item xs={6} sm={7} lg={8}>{formData && formData.shipping ? formData.shipping.name : 'no info'}</Grid>
                <Grid item xs={3} sm={2} lg={1}>
                    <Box className={classes.link} onClick={onToPayment}>Change</Box>
                </Grid>
            </Grid>) || ''
            }
        </div>
    )
};
