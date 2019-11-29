import React from "react";
import { Field, reduxForm } from 'redux-form';
import {renderTextField} from "../common/inputFields";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {openRegistrationModalAction} from "../../store/actions/modal";
import {useDispatch, useSelector} from "react-redux";
import {required, minLength, maxLength, emptyString, password} from '../common/validators';
import {loginAction} from "../../store/actions/customer";
import Spinner from '../common/Spinner'

import useStyles from "./useStyles";

const minLength7 = minLength(7);
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
                        <Field name="password" component={renderTextField} type='password' label="Password" validate={[required, password, minLength7, maxLength30]} />

                        <Button disabled={pristine || submitting || invalid} fullWidth={true} variant="outlined" type='submit' className={classes.btn}>Log In</Button>
                        <div className={classes.linkContainer}>
                            <Link href="someWhere" className={classes.link}>
                                Forgot password?
                            </Link>
                            <Link href="#"
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
