import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import { Link } from "react-router-dom";

// import * as cartActions from '../../../../store/actions/cart';

import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import useStyles from "./useStyles";

import Header from "../../../Header";
import Footer from "../../../Footer";

export default props => {

    //styling layout:
    const breakpointValues = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1500,
    };
    const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='xxl' className={classes.layoutContainer} >
                <div className={classes.header}><Header/></div>
                <div>{props.children}</div>
                <div className={classes.footer}><Footer/></div>
            </Container>
        </ThemeProvider>
    );
};
