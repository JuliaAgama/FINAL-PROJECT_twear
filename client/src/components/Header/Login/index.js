import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {openLoginModalAction} from "../../../store/actions/modal";
import {getCustomerAction, logoutAction} from "../../../store/actions/customer";
import { hideDesktopCategoriesMenuAction } from "../../../store/actions/header";

import { Grid} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';


import useStyles from "./useStyles";


export default () => {

    const customer = useSelector(state => state.customers.customer);
    const [isVisible, setVisibility] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {dispatch(getCustomerAction())},[dispatch]);

    const clickHandler = () => {
        dispatch(hideDesktopCategoriesMenuAction());
        if (customer.firstName) {
            setVisibility(!isVisible);
        } else {
            dispatch(openLoginModalAction());
        }
    };

    const logOutHandler = () => {
        setVisibility(!isVisible);
        dispatch(logoutAction());
    };

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.container}
                onClick={clickHandler}>
                {customer.firstName ?
                    <div className={classes.link}>
                        <PersonIcon/>
                        <span className={classes.name}>My Account</span>
                    </div>
                    :
                    <span className={classes.span}>Log In</span>
                }
            </div>
            {isVisible && <Grid container className={classes.subMenu}>
                {customer.isAdmin ?
                <>
                    <Grid item xs={12} md={3} className={classes.subMenuItem}>
                        <Link to='/personalCabinet' className={classes.linkContainer}>Personal Cabinet ({customer.firstName.toUpperCase()})</Link>
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
                        <Link to='/personalCabinet' className={classes.linkContainer}>Personal Cabinet  ({customer.firstName.toUpperCase()}) </Link>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.subMenuItem}>
                        <Link to={'/'} className={classes.linkContainer} onClick={logOutHandler}>Log Out</Link>
                    </Grid>
                </>
                }
            </Grid>}
        </React.Fragment>
    );
};
