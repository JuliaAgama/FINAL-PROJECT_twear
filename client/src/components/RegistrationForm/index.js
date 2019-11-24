import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {registrationAction} from "../../store/actions/customer";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import Checkbox from "@material-ui/core/Checkbox";
import useStyles from "./useStyles";

export default function Registration() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [gender, setGender] = useState('female');
    const [telephone, setTelephone] = useState('+380');
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState(false);

    const customer = {
        login: login,
        password: pass,
        gender: gender,
        telephone: telephone,
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    const checkboxText = 'I consent to the processing of my personal data by TWEAR for customer satisfaction purposes\n' +
                         'and for customizing my user experience to my interests or my shopping habits.';

    const handleChangeChecked = () => {
        setConfirm(!confirm);
    };

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form className={classes.form}>
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
                            <RadioGroup aria-label="position" name="position" value={gender} onChange={(event)=> setGender(event.target.value)} row>
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
                            </RadioGroup>
                        </FormControl>
                        <Box className={classes.inputContainer}>
                            <TextField onChange={event => setFirstName(event.target.value)} className={classes.inputField} fullWidth={true} margin='normal' required label="First Name"/>
                            <TextField onChange={event => setLastName(event.target.value)} className={classes.inputField} fullWidth={true} margin='normal' required label="Last Name"/>
                            <TextField onChange={event => setLogin(event.target.value)} className={classes.inputField} fullWidth={true} margin='normal'  label="Login"/>
                            <TextField onChange={event => setEmail(event.target.value)} className={classes.inputField} fullWidth={true} margin='normal' type='email' required label="Email"/>
                            <TextField onChange={event => setPass(event.target.value)} fullWidth={true} className={classes.inputField} margin='normal' label="Password" type="password" required/>
                            <TextField fullWidth={true} className={classes.inputField} margin='normal' id="date" label="Birthday" required type="date" defaultValue="2000-01-01"/>
                            <PhoneInput containerStyle={{
                                            marginTop: '30px',
                                            marginBottom: '30px',
                                            marginLeft: 'calc(50% - 125px)',
                                            width: '250px'
                                        }}
                                        inputStyle={{width: '250px'}}
                                        dropdownStyle={{width: '250px'}}
                                        defaultCountry={'ua'}
                                        value={telephone}
                                        onChange={(phoneNumber) => setTelephone(phoneNumber)}/>
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
                        <FormControlLabel
                            value={confirm}
                            control={<Checkbox  color="default"/>}
                            label={checkboxText}
                            onChange={handleChangeChecked}
                            className={classes.checkboxText}
                        />
                        <Button onClick={() => dispatch(registrationAction(customer))} fullWidth={true} variant="outlined" className={classes.btn}>Registration</Button>
                    </form>
                </Container>
            </Grid>
        </React.Fragment>
    );
}