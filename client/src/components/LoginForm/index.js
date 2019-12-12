import React from "react";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { Field, reduxForm } from 'redux-form';

import {loginAction} from "../../store/actions/customer";
import {openRegistrationModalAction} from "../../store/actions/modal";

import {Container, Grid, Button} from "@material-ui/core";

import useStyles from "./useStyles";

import {required, minLength, maxLength, emptyString, password} from '../common/validators';
import {renderTextField} from "../common/inputs/inputFields";
import Spinner from '../common/Spinner'


const minLength6 = minLength(6);
const minLength3 = minLength(3);
const maxLength30 = maxLength(30);

const Login = (props) => {
    const {loaded}  = useSelector(state => state.customers);
    const { handleSubmit, pristine, invalid, submitting } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const clickHandler = (event) => {
        event.preventDefault();
        dispatch(openRegistrationModalAction());
    };

    const submit = (values) => dispatch(loginAction(values));

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form onSubmit={handleSubmit(submit)} className={classes.form}>
                        <Field name="loginOrEmail" component={renderTextField} type='text' label="Login" validate={[required, emptyString, minLength3]} />
                        <Field name="password" component={renderTextField} type='password' label="Password" validate={[required, password, minLength6, maxLength30]} />

                        <Button disabled={pristine || submitting || invalid} fullWidth={true} variant="outlined" type='submit' className={classes.btn}>Log In</Button>
                        <div className={classes.linkContainer}>
                            <Link to="/someWhere" className={classes.link}>
                                Forgot password?
                            </Link>
                            <Link
                                to="/"
                                className={classes.link}
                                onClick={clickHandler}
                            >
                                Registration
                            </Link>
                        </div>
                    </form>
                    <Container className={classes.spinnerContainer}>
                        {loaded ? <Spinner/> : ''}
                    </Container>
                </Container>
            </Grid>
        </React.Fragment>
    );
}

export default reduxForm({
    form: 'Login'
})(Login);
