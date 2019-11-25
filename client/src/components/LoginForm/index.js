import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {openRegistrationModalAction} from "../../store/actions/modal";
import {loginAction} from "../../store/actions/customer";
import {useDispatch} from "react-redux";
import useStyles from "./useStyles";

export default function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const clickHandler = (event) => {
        event.preventDefault();
        dispatch(openRegistrationModalAction());
    };

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    const customer = {
        loginOrEmail: login,
        password: pass
    };

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form className={classes.form}>
                        <TextField error={true} helperText="Incorrect entry." onChange={(event) => setLogin(event.target.value)} fullWidth={true} margin="normal" required label="Login"/>
                        <TextField onChange={(event) => setPass(event.target.value)} fullWidth={true} margin="normal" label="Password" type="password" required/>
                        <Button fullWidth={true} onClick={() => dispatch(loginAction(customer))} variant="outlined" className={classes.btn}>Log In</Button>
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
                </Container>
            </Grid>
        </React.Fragment>
    );
}