import useStyles from "./useStyles";
import React from "react";
import Button from "@material-ui/core/Button";



export default function Logo() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Button href='/' fullWidth={true} className={classes.btn}>
                <img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/>
            </Button>
        </React.Fragment>
    );
}