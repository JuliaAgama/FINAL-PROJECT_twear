import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";
import {Link} from "react-router-dom";



export default function Logo() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Button fullWidth={true} className={classes.btn}>
                <Link to='/'>
                    <img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/>
                </Link>
            </Button>
        </React.Fragment>
    );
}