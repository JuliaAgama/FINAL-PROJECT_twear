import useStyles from "./useStyles";
import React  from "react";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function HeaderDropDownBlock() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container item xs={12} >
                <Container maxWidth={false} className={classes.container}>
                    <form className={classes.form}>
                        <TextField fullWidth={true} required label="Login"/>
                        <TextField fullWidth={true} margin="normal" label="Password" type="password" required/>
                        <Button fullWidth={true} variant="outlined" className={classes.btn}>Log In</Button>
                        <Link href="someWhere" className={classes.link}>
                            Forgot password?
                        </Link>
                        <Link href="someWhere" className={classes.link}>
                            Registration
                        </Link>
                    </form>
                </Container>
            </Grid>
        </React.Fragment>
    );
}