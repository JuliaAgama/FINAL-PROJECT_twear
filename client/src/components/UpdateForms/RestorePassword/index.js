import React from "react";
import {useDispatch} from "react-redux";
import { Field, reduxForm} from 'redux-form';

import {Container, Grid, Button, Box} from "@material-ui/core";

import useStyles from "./useStyles";

import {required, email} from '../../common/validators';
import {renderTextField} from "../../common/inputs/inputFields";
import {getCustomerByEmail} from "../../../store/actions/customer";





export default reduxForm({form: 'EmailUpdateForm'}) (props => {

    const dispatch = useDispatch();

    const { handleSubmit, pristine, invalid, submitting} = props;

    const submit = values => new dispatch(getCustomerByEmail(values));


    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form onSubmit={handleSubmit(submit)} className={classes.form}>
                        <Box className={classes.box}>
                            <p>FORGOT YOUR PASSWORD?</p>
                        </Box>
                        <div className={classes.spanContainer}>
                            <span>Enter the email address you signed up with and we will send you a new password.</span>
                        </div>
                        <div className={classes.spanContainer}>
                            <span>* Required fields</span>
                        </div>

                        <Box className={classes.inputContainer}>
                            <Field name="email"
                                   component={renderTextField}
                                   type='email'
                                   label="Email*"
                                   validate={[required, email]}
                                   className={classes.inputField}
                            />
                        </Box>
                        <Button disabled={pristine || submitting || invalid}
                                fullWidth={true}
                                variant="outlined"
                                type='submit'
                                className={classes.btn}
                        >
                            SEND
                        </Button>
                    </form>
                </Container>
            </Grid>
        </React.Fragment>
    );
});

