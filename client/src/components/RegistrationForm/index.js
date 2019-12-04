import React, {useState} from "react";
import {Container, Box, Grid, FormControl, FormControlLabel, Radio, Button,} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import { Field, reduxForm } from 'redux-form';
import {renderTextField, renderRadioGroup, renderCheckbox, renderPhoneNumber} from "../common/inputFields";
import {
    required,
    minLength,
    email,
    name,
    phoneNumber,
    maxLength,
    login,
    password
} from '../common/validators';
import {loginAction, registrationAction} from "../../store/actions/customer";
import 'react-phone-input-2/dist/style.css'

import useStyles from "./useStyles";
import Spinner from "../common/Spinner";

const minLength7 = minLength(7);
const minLength3 = minLength(3);
const minLength2 = minLength(2);
const maxLength25 = maxLength(25);
const maxLength10 = maxLength(10);
const maxLength30 = maxLength(30);


const Registration = (props) => {

    const [value, setValue] = useState('female');
    const [phoneNumber, setPhoneNumber] = useState('+380');
    const [checked, setChecked] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    const { handleSubmit, pristine, invalid, submitting } = props;
    const {loaded}  = useSelector(state => state.customers);
    const submit = (values) => dispatch(registrationAction(values));

    const checkboxText = 'I consent to the processing of my personal data by TWEAR for customer satisfaction purposes\n' +
    'and for customizing my user experience to my interests or my shopping habits.';

    const handleChangeRadio = event => {
        setValue(event.target.value);
    };

    const handleOnChangePhoneNumber = event => {
        setPhoneNumber(event.target.value);
    };

    const handleChangeChecked = () => {
        setChecked(!checked);
    };


    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form onSubmit={handleSubmit(submit)} className={classes.form}>
                        <Box className={classes.box}>
                            <p>I'M A NEW CUSTOMER</p>
                            <p>Create an account to make purchases and enjoy privileged access to exclusive shopping features such as:</p>
                            <ul>
                                <li>Use the Wish List to save favorite products</li>
                                <li>Complete checkout more quickly</li>
                                <li>Review order information and tracking</li>
                            </ul>
                        </Box>
                        <div className={classes.spanContainer}>
                            <span>Title*</span>
                            <span>* Required fields</span>
                        </div>
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
                        <Box className={classes.inputContainer}>
                            <Field name="firstName" component={renderTextField} type='text' label="First Name*" validate={[required, name, minLength2, maxLength25]} className={classes.inputField}/>
                            <Field name="lastName" component={renderTextField} type='text' label="Last Name*" validate={[required, name, minLength2, maxLength25]} className={classes.inputField}/>
                            <Field name="login" component={renderTextField} type='text' label="Login" validate={[required, login, minLength3, maxLength10]} className={classes.inputField}/>
                            <Field name="email" component={renderTextField} type='email' label="Email*" validate={[required, email]} className={classes.inputField}/>
                            <Field name="password" component={renderTextField} type='password' label="Password*" validate={[required, password, minLength7, maxLength30]} className={classes.inputField} />
                            <Field name="telephone" component={renderPhoneNumber} style={classes.phoneSpan}  validate={[phoneNumber]} className={classes.inputPhone}/>
                        </Box>
                        <p className={classes.text}>The data fields with an asterisk (*) must be completed in order to complete your registration
                            and satisfy any request you make. Your personal data may be jointly controlled by
                            TWEAR for customer management, marketing and other purposes. Your personal data may be shared
                            with associated companies and service providers to satisfy your request. You have the right to
                            request from us access to and rectification or erasure of your personal data or restriction of
                            processing concerning you or to object to processing as well as the right to data portability.
                            You also have the right to object, for a legitimate purpose, or withdraw your consent, as appropriate,
                            to the processing of your personal data. To exercise your rights, please write to privacy@twear.com.
                            You can also manage your subscriptions via your account.
                        </p>
                        <Field name='confirm' component={renderCheckbox} className={classes.checkboxText}  validate={[required]} label={checkboxText} />
                        <Button disabled={pristine || submitting || invalid}
                                type='submit'
                                fullWidth={true}
                                variant="outlined"
                                className={classes.btn}>Registration</Button>
                    </form>
                    <Container className={classes.spinnerContainer}>
                        {loaded ? <Spinner/> : ''}
                    </Container>
                </Container>
            </Grid>
        </React.Fragment>
    );
};


export default reduxForm({
    form: 'Registration'
})(Registration);