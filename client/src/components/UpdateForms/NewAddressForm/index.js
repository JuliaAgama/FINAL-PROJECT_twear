import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Field, reduxForm} from 'redux-form';

import {Container, Grid, Button, Box} from "@material-ui/core";

import useStyles from "./useStyles";

import {required, password, minLength, maxLength, name, login, email, phoneNumber, street} from '../../common/validators';
import {renderCheckbox, renderPhoneNumber, renderTextField} from "../../common/inputs/inputFields";
import {editCustomerInfo} from "../../../store/actions/customer";


const minLength2 = minLength(2);
const minLength3 = minLength(3);
const minLength7 = minLength(7);
const maxLength25 = maxLength(25);
const maxLength30 = maxLength(30);

const checkboxText = 'Mark as default shipping address';



export default reduxForm({form: 'AddNewAddress'}) (props => {

    const dispatch = useDispatch();

    const { handleSubmit, pristine, invalid, submitting} = props;

    const {customer}  = useSelector(state => state.customers);


    const submit = values => console.log(values);
        // dispatch(editCustomerInfo(values));


    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form onSubmit={handleSubmit(submit)} className={classes.form}>
                        <Box className={classes.box}>
                            <p>ADD NEW ADDRESS</p>
                        </Box>

                        <div className={classes.spanContainer}>
                            <span>Title*</span>
                            <span>* Required fields</span>
                        </div>

                        <Field name='isDefault'
                               component={renderCheckbox}
                               className={classes.checkboxText}
                               label={checkboxText}
                        />

                        <Box className={classes.inputContainer}>

                            <Field name="firstName"
                                   component={renderTextField}
                                   type='text'
                                   label={customer.firstName + ' *'}
                                   validate={[required, name, minLength2, maxLength25]}
                                   className={classes.inputField}
                            />
                            <Field name="lastName"
                                   component={renderTextField}
                                   type='text'
                                   label={customer.lastName + ' *'}
                                   validate={[required, name, minLength2, maxLength25]}
                                   className={classes.inputField}
                            />

                            <Field name="street"
                                   component={renderTextField}
                                   type='text'
                                   label='Street Number and Name *'
                                   validate={[required, street]}
                                   className={classes.inputField}
                            />

                            <Field name="addressLine2"
                                   component={renderTextField}
                                   type='text'
                                   label='Address Line 2'
                                   validate={[login]}
                                   className={classes.inputField}
                            />

                            <Field name="zipCode"
                                   component={renderTextField}
                                   type='text'
                                   label='Zip Code *'
                                   validate={[required, login]}
                                   className={classes.inputField}
                            />

                            <Field name="city"
                                   component={renderTextField}
                                   type='text'
                                   label='City *'
                                   validate={[required, name, minLength2]}
                                   className={classes.inputField}
                            />

                            <Field name="state"
                                   component={renderTextField}
                                   type='text'
                                   label='State *'
                                   validate={[required, name, minLength2]}
                                   className={classes.inputField}
                            />

                            <Field name="country"
                                   component={renderTextField}
                                   type='text'
                                   label='Country *'
                                   validate={[required, name, minLength2]}
                                   className={classes.inputField}
                            />

                            <Field name="email"
                                   component={renderTextField}
                                   type='email'
                                   label={customer.email + ' *'}
                                   validate={[required, email]}
                                   className={classes.inputField}
                            />

                            <Field name="telephone"
                                   component={renderPhoneNumber}
                                   style={classes.phoneSpan}
                                   validate={[phoneNumber]}
                                   className={classes.inputPhone}
                            />

                            <Field name="password"
                                   component={renderTextField}
                                   type='password'
                                   label="Password*"
                                   validate={[required, password, minLength7, maxLength30]}
                                   className={classes.inputField}
                            />

                        </Box>
                        <Button disabled={pristine || submitting || invalid}
                                fullWidth={true}
                                variant="outlined"
                                type='submit'
                                className={classes.btn}
                        >
                            ADD
                        </Button>
                    </form>
                </Container>
            </Grid>
        </React.Fragment>
    );
});

