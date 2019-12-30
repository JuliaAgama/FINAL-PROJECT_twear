import React from "react";
import {Link} from "react-router-dom";

import {Container} from "@material-ui/core";
import useStyles from "./useStyles";

import ModalQR from '../../common/ModalQR';
import ModalTeam from '../../common/ModalTeam';


export default () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <Link to='/'>
                    <img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/>
                </Link>
                <ModalTeam/>
                <ModalQR/>
            </Container>
        </React.Fragment>
    );
}