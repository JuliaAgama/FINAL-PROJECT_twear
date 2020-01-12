import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {openLoginModalAction} from "../../../store/actions/modal";
import {getCustomerAction} from "../../../store/actions/customer";
import { showLoginMenuAction } from "../../../store/actions/header";

import PersonIcon from '@material-ui/icons/Person';

import useStyles from "./useStyles";

export default () => {

    const customer = useSelector(state => state.customers.customer);

    const dispatch = useDispatch();
    useEffect(() => {dispatch(getCustomerAction())},[dispatch]);

    const clickHandler = () => {
        if (customer.firstName) {
            dispatch(showLoginMenuAction())
        } else {
            dispatch(openLoginModalAction());
        }
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
        </React.Fragment>
    );
};
