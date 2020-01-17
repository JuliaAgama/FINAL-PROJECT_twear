import React from 'react';
import { Link } from "react-router-dom";

import {Elements, StripeProvider} from 'react-stripe-elements';

import { Container } from '@material-ui/core';

import useStyles from './useStyles';

import StripePayment from './StripePayment';


export default props => {

    const classes = useStyles();

    return (
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
            <Container maxWidth='xl' className={classes.container} >
                <Link to="/" >
                    <div className={classes.logo}>
                        <img className={classes.image} src="/img/twear_logo_grey-on-transparent.png" alt="NOT FOUND"/>
                    </div>
                </Link>
                <Elements>
                    <StripePayment/>
                </Elements>
            </Container>
        </StripeProvider>
    )
};
