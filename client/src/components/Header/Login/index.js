import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {openLoginModalAction} from "../../../store/actions/modal";
import {getCustomerAction, logoutAction} from "../../../store/actions/customer";

import {Container, Grid} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

import useStyles from "./useStyles";


export default function Login() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const customer = useSelector(state => state.customers.customer);
    const [isVisible, setVisibility] = useState(false);
    useEffect(() => {dispatch(getCustomerAction())},[dispatch]);

    const clickHandler = () => {
        setVisibility(!isVisible);
    };

    const logOutHandler = () => {
        setVisibility(!isVisible);
        dispatch(logoutAction());
    };

    return (
        <React.Fragment>
            <div className={classes.container}
                    onClick={customer.firstName ? () => clickHandler() : () => dispatch(openLoginModalAction())}>
                {customer.firstName ?
                    <div className={classes.link}>
                        <PersonIcon/>
                        <span className={classes.name}>My Account</span>
                    </div>
                    :
                    <span className={classes.span}>Log In</span>
                }
            </div>
            {isVisible ?
                <Grid container className={classes.subMenu}>
                    {customer.isAdmin ?
                    <>
                        <Grid item xs={12} md={3} className={classes.subMenuItem}>
                            <Link to='/#' className={classes.linkContainer}>Personal Cabinet ({customer.firstName.toUpperCase()})</Link>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.subMenuItem}>
                            <Link to={'/admin'} className={classes.linkContainer}>Admin Page</Link>
                        </Grid>
                        <Grid item xs={12} md={3} className={classes.subMenuItem}>
                            <Link to={'/'} className={classes.linkContainer} onClick={logOutHandler}>Log Out</Link>
                        </Grid>
                    </> :
                    <>
                        <Grid item xs={12} md={6} className={classes.subMenuItem}>
                            <Link to='/#' className={classes.linkContainer}>Personal Cabinet  ({customer.firstName.toUpperCase()}) </Link>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.subMenuItem}>
                            <Link to={'/'} className={classes.linkContainer} onClick={logOutHandler}>Log Out</Link>
                        </Grid>
                    </>
                    }
                </Grid> : <></>
            }
        </React.Fragment>
    );
};
