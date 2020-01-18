import React from "react";
import clsx from 'clsx';

import {Container, useMediaQuery} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../../../store/actions/customer";
import {headerCloseAction, hideLoginMenuAction} from "../../../../store/actions/header";

import useStyles from "./useStyles";


export default () => {

    const customer = useSelector(state => state.customers.customer);
    const isShow = useSelector(state => state.header.showLoginMenu);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();
    const dispatch = useDispatch();

    const logOutHandler = () => {
        if (matches) {
            dispatch(headerCloseAction());
        } else {
            dispatch(hideLoginMenuAction());
        }
        dispatch(logoutAction());
    };

    const personalCabinetHandler = () => {
        if (matches) {
            dispatch(headerCloseAction());
        } else {
            dispatch(hideLoginMenuAction());
        }
    };

    return (
        <>
            {isShow ?
                <>
                    <Container maxWidth={false} className={classes.container}>
                        {customer.isAdmin ?
                            <>
                                <Container maxWidth={false} className={matches ? classes.item25 : clsx(classes.item25, classes.borderRight)}>
                                    <Link to='/personalCabinet' onClick={personalCabinetHandler} className={classes.linkContainer}>Personal Cabinet</Link>
                                </Container>
                                <Container maxWidth={false} className={classes.item50}>
                                    <Link to='/admin' className={classes.linkContainer}>Admin Page</Link>
                                </Container>
                                <Container maxWidth={false} className={matches ? classes.item25 : clsx(classes.item25, classes.borderLeft)}>
                                    <Link to='/' className={classes.linkContainer} onClick={logOutHandler}>Log Out</Link>
                                </Container>
                            </>
                            :
                            <>
                                <Container maxWidth={false} className={classes.item50}>
                                    <Link to='/personalCabinet' onClick={personalCabinetHandler} className={classes.linkContainer}>Personal Cabinet</Link>
                                </Container>
                                <Container maxWidth={false} className={matches ? classes.item50 : clsx(classes.item50, classes.borderLeft)}>
                                    <Link to='/' className={classes.linkContainer} onClick={logOutHandler}>Log Out</Link>
                                </Container>
                            </>
                        }
                    </Container>
                </> : <></>
            }
        </>
    );
};