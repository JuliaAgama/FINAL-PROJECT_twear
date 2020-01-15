import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Field, reduxForm} from 'redux-form';

import {Container, Grid, Button, Box, FormControl, FormControlLabel, Radio} from "@material-ui/core";

import useStyles from "./useStyles";

import {required, password, minLength, maxLength, name, login} from '../../common/validators';
import {renderRadioGroup, renderTextField} from "../../common/inputs/inputFields";
import Spinner from '../../common/Spinner'
import {editCustomerInfo} from "../../../store/actions/customer";


const minLength2 = minLength(2);
const minLength3 = minLength(3);
const minLength7 = minLength(7);
const maxLength25 = maxLength(25);
const maxLength30 = maxLength(30);



export default reduxForm({form: 'EmailUpdateForm'}) (props => {

    const dispatch = useDispatch();

    const { handleSubmit, pristine, invalid, submitting, typeForm } = props;

    const {loaded, customer, error}  = useSelector(state => state.customers);


    const submit = values => dispatch(editCustomerInfo(values));


    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form onSubmit={handleSubmit(submit)} className={classes.form}>
                        {typeForm === 'loginUpdate' ?
                            <Box className={classes.box}>
                                <p>CHANGE YOUR LOGIN</p>
                                <p>Login: {customer.login}</p>
                            </Box>
                            :
                            <Box className={classes.box}>
                                <p>CHANGE YOUR NAME</p>
                                <p>Name: {customer.firstName + ' ' + customer.lastName}</p>
                            </Box>
                        }

                        <div className={classes.spanContainer}>
                            <span>Title*</span>
                            <span>* Required fields</span>
                        </div>

                        {typeForm !== 'loginUpdate' ?
                            <FormControl component="fieldset">
                                <Field name='gender' component={renderRadioGroup} validate={[required]}>
                                    <FormControlLabel
                                        value='female'
                                        control={<Radio color="default" />}
                                        label="MISS, MRS., MS."
                                        labelPlacement="end"
                                        className={classes.radioBtn}
                                    />
                                    <FormControlLabel
                                        control={<Radio color="default" />}
                                        label="MR."
                                        labelPlacement="end"
                                        value='male'
                                    />
                                </Field>
                            </FormControl>
                            :
                            <></>
                        }

                        <Box className={classes.inputContainer}>
                            {typeForm !== 'loginUpdate' ?
                                <>
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
                                </>
                                :
                                <Field name="login"
                                       component={renderTextField}
                                       type='text'
                                       label={customer.login + ' *'}
                                       validate={[required, login, minLength3, maxLength30]}
                                       className={classes.inputField}
                                />
                            }
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
                            SAVE
                        </Button>
                    </form>
                    {/*<Container className={classes.spinnerContainer}>*/}
                    {/*    {loaded ? '' : <Spinner/>}*/}
                    {/*</Container>*/}
                </Container>
            </Grid>
        </React.Fragment>
    );
});

