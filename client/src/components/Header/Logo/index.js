import React from "react";
import useStyles from "./useStyles";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";



export default function Logo() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <Link to='/'>
                    <img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/>
                </Link>
            </Container>
        </React.Fragment>
    );
}