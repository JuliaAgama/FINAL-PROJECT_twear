import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Field, reduxForm, SubmissionError} from 'redux-form';

import {Container, Grid, Button, Box} from "@material-ui/core";

import useStyles from "./useStyles";

import {required, email, password, minLength, maxLength} from '../../common/validators';
import {renderTextField} from "../../common/inputs/inputFields";
import {editCustomerInfo} from "../../../store/actions/customer";


const minLength3 = minLength(3);
const maxLength30 = maxLength(30);
const confirmEmail = values => values.email !== values.emailConfirm ? 'Email mismatched' : undefined;




export default reduxForm({form: 'EmailUpdateForm'}) (props => {

    const dispatch = useDispatch();

    const { handleSubmit, pristine, invalid, submitting} = props;

    const {customer}  = useSelector(state => state.customers);

    const submit = values => {
       if(confirmEmail(values)) {
           return new Promise((resolve, reject) =>
           {throw new SubmissionError({ emailConfirm: 'Email mismatched'})});
       } else {
           return dispatch(editCustomerInfo(values));
       }
    };

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form onSubmit={handleSubmit(submit)} className={classes.form}>
                        <Box className={classes.box}>
                            <p>CHANGE YOUR EMAIL</p>
                            <p>Current email address: {customer.email}</p>
                        </Box>
                        <div className={classes.spanContainer}>
                            <span>Title*</span>
                            <span>* Required fields</span>
                        </div>

                        <Box className={classes.inputContainer}>
                        <Field name="email"
                               component={renderTextField}
                               type='email'
                               label="NewEmail*"
                               validate={[required, email]}
                               className={classes.inputField}
                        />
                        <Field name="emailConfirm"
                               component={renderTextField}
                               type='email'
                               label="Confirm New Email*"
                               validate={[required, email]}
                               className={classes.inputField}
                        />
                        <Field name="password"
                               component={renderTextField}
                               type='password'
                               label="Password*"
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
                            Update Email
                        </Button>
                    </form>
                </Container>
            </Grid>
        </React.Fragment>
    );
});

