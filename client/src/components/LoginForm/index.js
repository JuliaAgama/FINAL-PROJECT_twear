import React  from "react";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {openRegistrationModalAction} from "../../store/actions/modal";
import {useDispatch} from "react-redux";
import useStyles from "./useStyles";

export default function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const clickHandler = (event) => {
        event.preventDefault();
        dispatch(openRegistrationModalAction());
    }

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form className={classes.form}>
                        <TextField fullWidth={true} margin="normal" required label="Login"/>
                        <TextField fullWidth={true} margin="normal" label="Password" type="password" required/>
                        <Button fullWidth={true} variant="outlined" className={classes.btn}>Log In</Button>
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