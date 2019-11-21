import useStyles from "./useStyles";
import React from "react";
import Button from "@material-ui/core/Button";


export default function Login() {

    const classes = useStyles();


    return (
        <React.Fragment>
            <Button className={classes.btn}>Log In</Button>
        </React.Fragment>
    );
}