import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getCustomerAction} from "../../../store/actions/customer";
import {openLoginModalAction} from "../../../store/actions/modal";
import {hideDesktopCategoriesMenuAction, hideMobileMenuAction} from "../../../store/actions/header";

import {Container} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

import useStyles from "./useStyles";


export default function Login() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const customer = useSelector(state => state.customers.customer);
    useEffect(() => {dispatch(getCustomerAction())},[dispatch]);
    const show  = useSelector(state => state.header.show);
    const showMobileMenu  = useSelector(state => state.header.showMobileMenu);
    const clickHandler = () => {
        if(showMobileMenu) {
            dispatch(hideMobileMenuAction());
        } else if (show && showMobileMenu) {
            dispatch(hideMobileMenuAction());
        } else if (show) {
            dispatch(hideDesktopCategoriesMenuAction());
        }
    };

    return (
        <React.Fragment>
            <Container className={classes.container}
                    onClick={customer.firstName ? () => {} : () => dispatch(openLoginModalAction())}>
                {customer.firstName ?
                    <Link to='/personalCabinet' onClick={clickHandler} className={classes.linkContainer} >
                        <div className={classes.link}>
                            <PersonIcon/>
                            <span className={classes.name}>My Account</span>
                        </div>
                    </Link>
                    :
                    <span className={classes.span}>Log In</span>
                }
            </Container>
        </React.Fragment>
    );
}