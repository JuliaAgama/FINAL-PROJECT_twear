import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Field, reduxForm } from 'redux-form';

import {Container, Grid, Button, Box} from "@material-ui/core";

import useStyles from "./useStyles";

import {maxLength, minLength, password, phoneNumber, required} from '../../common/validators';
import {renderPhoneNumber, renderTextField} from "../../common/inputs/inputFields";
import {editCustomerInfo} from "../../../store/actions/customer";

const minLength7 = minLength(7);
const maxLength30 = maxLength(30);

export default reduxForm({form: 'TelephoneUpdateForm'}) (props => {

    const dispatch = useDispatch();

    const { handleSubmit, pristine, invalid, submitting } = props;

    const {customer}  = useSelector(state => state.customers);


    const submit = values => dispatch(editCustomerInfo(values));

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
                        <Field name="password"
                               component={renderTextField}
                               type='password'
                               label="Password*"
                               validate={[required, password, minLength7, maxLength30]}
                               className={classes.inputField}
                        />
                        <Button disabled={pristine || submitting || invalid}
                                fullWidth={true}
                                variant="outlined"
                                type='submit'
                                className={classes.btn}
                        >
                            SAVE
                        </Button>
                    </form>
                </Container>
            </Grid>
        </React.Fragment>
    );
});
