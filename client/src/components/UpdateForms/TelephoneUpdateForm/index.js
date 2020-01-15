import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Field, reduxForm } from 'redux-form';

import {Container, Grid, Button, Box} from "@material-ui/core";

import useStyles from "./useStyles";

import {phoneNumber} from '../../common/validators';
import {renderPhoneNumber} from "../../common/inputs/inputFields";
import Spinner from '../../common/Spinner'

export default reduxForm({form: 'TelephoneUpdateForm'}) (props => {

    const dispatch = useDispatch();

    const { handleSubmit, pristine, invalid, submitting } = props;

    const {loaded, customer}  = useSelector(state => state.customers);


    const submit = values => console.log(values);
    // dispatch(loginAction(values, cart));

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form onSubmit={handleSubmit(submit)} className={classes.form}>
                        <Box className={classes.box}>
                            <p>CHANGE YOUR TELEPHONE</p>
                            <p>Telephone: {customer.telephone}</p>
                        </Box>

                        <Box className={classes.inputContainer}>
                            <Field name="telephone"
                                   component={renderPhoneNumber}
                                   style={classes.phoneSpan}
                                   validate={[phoneNumber]}
                                   className={classes.inputPhone}
                            />
                        </Box>
                        <Button disabled={pristine || submitting || invalid}
                                fullWidth={true}
                                variant="outlined"
                                type='submit'
                                className={classes.btn}
                        >
                            SAVE
                        </Button>
                    </form>
                    <Container className={classes.spinnerContainer}>
                        {loaded ? '' : <Spinner/>}
                    </Container>
                </Container>
            </Grid>
        </React.Fragment>
    );
});
