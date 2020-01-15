import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Field, reduxForm } from 'redux-form';

import {Container, Grid, Button, Box} from "@material-ui/core";

import useStyles from "./useStyles";

import {required, password, minLength, maxLength} from '../../common/validators';
import {renderTextField} from "../../common/inputs/inputFields";
import Spinner from '../../common/Spinner'

const minLength3 = minLength(3);
const maxLength30 = maxLength(30);



export default reduxForm({form: 'PasswordUpdateForm'}) (props => {

    const dispatch = useDispatch();

    const { handleSubmit, pristine, invalid, submitting } = props;

    const {loaded}  = useSelector(state => state.customers);


    const submit = values => console.log(values);
    // dispatch(loginAction(values, cart));

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form onSubmit={handleSubmit(submit)} className={classes.form}>
                        <Box className={classes.box}>
                            <p>CHANGE YOUR PASSWORD</p>
                        </Box>
                        <div className={classes.spanContainer}>
                            <span>Title*</span>
                            <span>* Required fields</span>
                        </div>

                        <Box className={classes.inputContainer}>
                            <Field name="currentPassword"
                                   component={renderTextField}
                                   type='password'
                                   label="Current Password*"
                                   validate={[required, password, minLength3, maxLength30]}
                                   className={classes.inputField}
                            />
                            <Field name="newPassword"
                                   component={renderTextField}
                                   type='password'
                                   label="New Password*"
                                   validate={[required, password, minLength3, maxLength30]}
                                   className={classes.inputField}
                            />
                            <Field name="confirmPassword"
                                   component={renderTextField}
                                   type='password'
                                   label="Confirm New Password*"
                                   validate={[required, password, minLength3, maxLength30]}
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
                    <Container className={classes.spinnerContainer}>
                        {loaded ? '' : <Spinner/>}
                    </Container>
                </Container>
            </Grid>
        </React.Fragment>
    );
});
